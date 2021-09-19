import { NotImplementedError } from '../extensions/index.js';

export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false};
  let first_l = '';
  for (let i=0;i<members.length;i++) {
    if (typeof members[i] == 'string') {
      first_l += members[i].split(' ').join('')[0];
    }
  }
  return first_l.split('').sort().join('').toUpperCase().split('').sort().join('');

}
