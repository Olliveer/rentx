import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { database } from '../database';
import { api } from '../services/api';
import { User as UserModel } from '../database/models/User';

type User = {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const userCollection = database.get<UserModel>('users');
      await database.write(async () => {
        const dataUser = await userCollection.create((newUser) => {
          (newUser.user_id = user.id),
            (newUser.name = user.name),
            (newUser.email = user.email),
            (newUser.driver_license = user.driver_license),
            (newUser.avatar = user.avatar),
            (newUser.token = token);
        });

        const userData = dataUser._raw as unknown as User;
        setData(userData);
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Opsss! Something went wrong', error);
      }
    }
  }

  async function signOut() {
    try {
      const userCollection = database.get<UserModel>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });

      setData({} as User);
    } catch (error: any | unknown) {
      throw new Error('Opsss! Something went wrong', error);
    }
  }

  useEffect(() => {
    async function loadUserData() {
      const usgerCollection = database.get<UserModel>('users');
      const response = await usgerCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as User;
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${userData.token}`;

        setData(userData);
      }
    }
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
