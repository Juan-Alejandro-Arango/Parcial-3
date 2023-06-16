
let carros = [
    { marca: 'Mazda', modelo: 'Sedan 3 touring', color: 'Rojo', año: 2020, precio: 90000000 },
    { marca: 'hyundai', modelo: 'Veloster', color: 'gris metalizado', año: 2018, precio: 55000000 },
    { marca: 'Ford', modelo: 'Mustang', color: 'Negro', año: 2021, precio: 350000000 },
    { marca: 'Chevrolet', modelo: 'Onix', color: 'Gris', año: 2021, precio: 50000000 }
  ];
  
  carros.map(function(carro, index) {
    console.log('Carro ' + (index + 1) + ':');
    console.log('Marca: ' + carro.marca);
    console.log('Modelo: ' + carro.modelo);
    console.log('Color: ' + carro.color);
    console.log('Año: ' + carro.año);
    console.log('Precio: $' + carro.precio);
    console.log('---------------------------');
  });
  