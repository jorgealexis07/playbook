const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log(explorers)
//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Nombres de los explorers")
explorers.forEach( explore => console.log(explore.name))

//Imprime el stack de cada explorer, usa FOR EACH
console.log("Stack de cada explorer")
explorers.forEach( explore => console.log(explore.stack))

//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("Lista de los stacks de cada explorer ")
const explorers_stacks = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log(explorers_stacks)

//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("Lista de explorers que usen JS ")
const listExpwithJS = explorers.filter((stackinExp) => stackinExp.stack.includes("js"));
console.log(listExpwithJS);

//Busca el primer explorer que sea de la CDMX, usa FIND
console.log("Primer explorer de la CDMX ")
const searchs = explorers.find((search) => search.city === "CDMX" );
console.log(searchs)

//Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("Suma de todos los ejercicios completados")
const result_of_reduce = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log("Calcular la suma de los elementos de una lista de ejercicios completados")
console.log(result_of_reduce)

//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
// Uso de Some para ver si al menos uno de los elementos es false
console.log("validacion, al menos uno de los explorers tiene la propiedad excersises finished como true")
const areSomeTrue = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)
console.log(areSomeTrue)
//explorers.forEach( explorer => console.log(explorer.missions.frontend.exercisesFinished) )


//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("validacion, si todos los explorers tienen la propiedad isFinished del onboarding como true.")
const areAllStr = explorers.every((name) => name.missions.onboarding.isFinished === true) // every
console.log( areAllStr)
