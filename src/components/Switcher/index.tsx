import React, { useContext } from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface Props {
   toggleTheme(): void;
}

const Switcher: React.FC<Props> = ({ toggleTheme }) => {
   const { colors, title } = useContext(ThemeContext);

   return (
      <Container onClick={() => toggleTheme()}>
         {title === "light" 
            ? <FiMoon size={35} color={colors.background} />
            : <FiSun size={35} color={colors.background} />
         }
      </Container>
   );
}

export default Switcher;