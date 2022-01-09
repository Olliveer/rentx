import SpeedSvg from '../assets/speed.svg';
import AccelerationSvg from '../assets/acceleration.svg';
import GasolineSvg from '../assets/gasoline.svg';
import EnergiSvg from '../assets/energy.svg';
import HybridSvg from '../assets/hybrid.svg';
import ExchangeSvg from '../assets/exchange.svg';
import PeopleSvg from '../assets/people.svg';
import ForceSvg from '../assets/force.svg';
import CarSvg from '../assets/car.svg';

export function getAccessoryIcon(type: string) {
  switch (type) {
    case 'speed':
      return SpeedSvg;
    case 'acceleration':
      return AccelerationSvg;
    case 'gasoline_motor':
      return GasolineSvg;
    case 'eletric_motor':
      return EnergiSvg;
    case 'hybrid_motor':
      return HybridSvg;
    case 'exchange':
      return ExchangeSvg;
    case 'seats':
      return PeopleSvg;
    case 'turning_diameter':
      return ForceSvg;
    default:
      return CarSvg;
  }
}
