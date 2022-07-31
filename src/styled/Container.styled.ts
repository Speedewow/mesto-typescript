import styled from 'styled-components';
import { colors } from './Colors';

export const Container = styled.div<any>`
  position: ${({ position }) => position || 'relative'};
  top: ${({ top }) => top || 'auto'};
  right: ${({ right }) => right || 'auto'};
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  gap: ${({ gap }) => gap || '0'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  opacity: ${({ opacity }) => opacity || '1'};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const AvatarContainer = styled(Container)`
  border-radius: 50%;
  max-width: 120px;
  max-height: 120px;

  @media screen and (max-width: 600px) {
    max-width: 282px;
    max-height: 300px;
  }
`;

export const ProfileContainer = styled(Container)`
  max-width: 300px;
  margin: auto auto auto 30px;

  @media screen and (max-width: 600px) {
    max-width: 190px;
    margin: 26px auto 32px;
  }
`;

export const Overlay = styled(Container)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.9;
  background-color: ${colors.black};
`;
