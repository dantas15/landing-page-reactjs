import { Heading } from '../../components/Heading';
import * as Styled from './styles';

export function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>Hello world</Heading>
      </Styled.Wrapper>
    </div>
  );
}
