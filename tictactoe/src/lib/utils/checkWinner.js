import winnerPaths from '../constans/winnerPaths';

const checkWinner = (checked, handleIsWinner) => {
  for (let i = 0; i < winnerPaths.length; i++) {
    const [a, b, c] = winnerPaths[i];

    if (checked && checked.length >= 3 && checked.includes(a) && checked.includes(a) === checked.includes(b) && checked.includes(a) === checked.includes(c)) {
      handleIsWinner();
    }
  }
  return null;
}

export default checkWinner;