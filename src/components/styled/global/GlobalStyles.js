import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* , h1{
  margin: 0;
  padding: 0;
}

body {
	font-family: 'Inter', sans-serif;
	padding: 0 20px;
	min-height: 100vh;
  color: #fff;
  background-color: #000;
}

@media screen and (max-width: 879px) {
	body {
		padding: 0;
	}
}`;
