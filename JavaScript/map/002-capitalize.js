const myFriends = [
  { name: "david" },
  { name: "vetrivel" },
  { name: "pravin abdul kalam" },
];

const myFriendsCapitalize = myFriends.map(
  (e) => e.name.charAt(0).toUpperCase() + e.name.slice(1)
);
console.log(myFriendsCapitalize);
