import Team from './team';
import Character from './character';

const character1 = new Character();
const character2 = new Character();
const character3 = new Character();

const team = new Team('ff');
team.add(character1);
team.add(character2);
team.add(character3);

console.log(team);

const iterator = team[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const unit of team) {
  console.log(unit);
}
