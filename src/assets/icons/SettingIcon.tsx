import { FC } from 'react';
import { IIconEntity } from '../../types/entity/icon';

type SettingIconPropsType = IIconEntity;
const SettingIcon: FC<SettingIconPropsType> = ({ width = 10, height = 8, stroke = "#A4A5A6" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none">
            <path
                d="M9.59372 3.94C9.68372 3.398 10.1537 3 10.7037 3H13.2967C13.8467 3 14.3167 3.398 14.4067 3.94L14.6197 5.221C14.6827 5.595 14.9327 5.907 15.2647 6.091C15.3387 6.131 15.4117 6.174 15.4847 6.218C15.8097 6.414 16.2047 6.475 16.5597 6.342L17.7767 5.886C18.0261 5.79221 18.3007 5.78998 18.5516 5.87971C18.8025 5.96945 19.0134 6.14531 19.1467 6.376L20.4427 8.623C20.5758 8.8537 20.6227 9.12413 20.5751 9.38617C20.5275 9.6482 20.3884 9.88485 20.1827 10.054L19.1797 10.881C18.8867 11.122 18.7417 11.494 18.7497 11.873C18.7511 11.958 18.7511 12.043 18.7497 12.128C18.7417 12.506 18.8867 12.878 19.1797 13.119L20.1837 13.946C20.6077 14.296 20.7177 14.901 20.4437 15.376L19.1457 17.623C19.0126 17.8536 18.8019 18.0296 18.5512 18.1195C18.3005 18.2094 18.0261 18.2074 17.7767 18.114L16.5597 17.658C16.2047 17.525 15.8097 17.586 15.4837 17.782C15.4112 17.8261 15.3379 17.8688 15.2637 17.91C14.9327 18.093 14.6827 18.405 14.6197 18.779L14.4067 20.06C14.3167 20.603 13.8467 21 13.2967 21H10.7027C10.1527 21 9.68372 20.602 9.59272 20.06L9.37972 18.779C9.31772 18.405 9.06772 18.093 8.73572 17.909C8.66157 17.8681 8.58822 17.8258 8.51572 17.782C8.19072 17.586 7.79572 17.525 7.43972 17.658L6.22272 18.114C5.97345 18.2075 5.69908 18.2096 5.44842 18.1199C5.19775 18.0302 4.98703 17.8545 4.85372 17.624L3.55672 15.377C3.42366 15.1463 3.37676 14.8759 3.42437 14.6138C3.47198 14.3518 3.61101 14.1152 3.81672 13.946L4.82072 13.119C5.11272 12.879 5.25772 12.506 5.25072 12.128C5.24915 12.043 5.24915 11.958 5.25072 11.873C5.25772 11.493 5.11272 11.122 4.82072 10.881L3.81672 10.054C3.61126 9.88489 3.47239 9.64843 3.42479 9.38662C3.37719 9.12481 3.42393 8.8546 3.55672 8.624L4.85372 6.377C4.9869 6.14614 5.19773 5.97006 5.44863 5.88014C5.69953 5.79021 5.97421 5.79229 6.22372 5.886L7.43972 6.342C7.79572 6.475 8.19072 6.414 8.51572 6.218C8.58772 6.174 8.66172 6.132 8.73572 6.09C9.06772 5.907 9.31772 5.595 9.37972 5.221L9.59372 3.94Z"
                stroke={stroke}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                stroke={stroke}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    );
};

export { SettingIcon };
