import * as Styled from './styles';

import { Base } from 'templates/Base';
import { mockBase } from 'templates/Base/stories';

export function Home() {
  return <Base {...mockBase} />;
}
