const group = [
  { name: 'TABA', places: 6 },
  { name: 'SHARM', places: 15 },
  { name: 'HURGADA', places: 25 },
];
let needTickets = prompt('Скільки потрібно квитків?');

!Number(needTickets) || needTickets <= 0
  ? alert('Щось не те внесли')
  : needTickets > 0 && needTickets <= group[0].places
  ? confirm(`Є місця! Їдемо до ${group[0].name}?`) &&
    confirm(
      `Приємної подорожі у группі ${group[0].name}! (ще є  ${
        group[0].places - needTickets
      } вільних місць)`
    )
  : needTickets <= group[1].places
  ? confirm(`Є місця! Їдемо до ${group[1].name}?`) &&
    confirm(
      `Приємної подорожі у группі ${group[1].name}! (ще є  ${
        group[1].places - needTickets
      } вільних місць)`
    )
  : needTickets <= group[2].places
  ? confirm(`Є місця! Їдемо до ${group[2].name}?`) &&
    confirm(
      `Приємної подорожі у группі ${group[2].name}!" (ще є  ${
        group[2].places - needTickets
      } вільних місць)`
    )
  : confirm('Місць нема ;( ');
