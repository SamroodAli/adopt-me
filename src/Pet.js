const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = `http://pets-images.dev-apis.com/pets/none.jpg`;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </div>
  );
};

export default Pet;
