import { soma as somador, sub } from './functions';
import sum, {mult as multiplicador} from './sum';
import * as messages from './messages';

console.log(somador(1, 2));
console.log(sub(1, 2));
console.log(sum(10, 10));
console.log(multiplicador(10, 10));
console.log(messages.firstName());
console.log(messages.lastName());