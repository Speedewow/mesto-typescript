import { createGlobalStyle } from 'styled-components';
import { colors } from '../colors';

export default createGlobalStyle`
* , h1{
  margin: 0;
  padding: 0;
}

body {
	font-family: 'Inter', sans-serif;
	padding: 0 20px;
	min-height: 100vh;
  color: ${colors.white};
  background-color: ${colors.black};
}

@media screen and (max-width: 879px) {
	body {
		padding: 0;
	}
}`;
