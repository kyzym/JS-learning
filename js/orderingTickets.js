const group = [
  { name: 'TABA', places: 6 },
  { name: 'SHARM', places: 15 },
  { name: 'HURGADA', places: 25 },
];
let maxPlaces = 0;
group.filter(item => {
  maxPlaces = Math.max(item.places);
});

const needTickets = prompt('Скільки потрібно квитків?');

for (let i = 0; i < group.length; i += 1) {
  if (Number(needTickets) > maxPlaces) {
    alert('Місць нема ;( ');
    break;
  } else if (!Number(needTickets) || needTickets <= 0) {
    alert('Щось не те внесли');
    break;
  } else if (needTickets > 0 && needTickets <= group[i].places) {
    confirm(`Є місця! Їдемо до ${group[i].name}?`) &&
      alert(
        `Приємної подорожі у группі ${group[i].name}! (ще є  ${
          group[i].places - needTickets
        } вільних місць)`
      );
    break;
  }
}
