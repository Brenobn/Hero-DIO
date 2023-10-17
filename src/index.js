let heroName = "Iron DIO";
let heroXp = 6000;
let level;

if (heroXp <= 1000) {
  level = "Ferro";
} else if (heroXp <= 2000) {
  level = "Bronze";
} else if (heroXp <= 6000) {
  level = "Prata";
} else if (heroXp <= 7000) {
  level = "Ouro";
} else if (heroXp <= 8000) {
  level = "Platina";
} else if (heroXp <= 9000) {
  level = "Ascendente";
} else if (heroXp <= 10000) {
  level = "Imortal";
} else {
  level = "Radiante";
}

console.log(`O herói ${heroName} está no nível ${level}`);
