class User {
  
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;  
      this.lastName = lastName;    
      this.age = age;              
      this.location = location; 
    } 
      compareAge(otherUser) {
        if (this.age > otherUser.age) {
          return this.firstName + " " + this.lastName + " è più giovane di " + otherUser.firstName + " " + otherUser.lastName + ".";
        } else if (this.age < otherUser.age) {
          return otherUser.firstName + " " + otherUser.lastName + " è più vecchio di " + this.firstName + " " + this.lastName + ".";
        } 
      }   
    }

    let user1 = new User("Riccardo", "Rossi", 28, "Roma")
    let user2 = new User("Emanuele", "Bianchi", 35, "Roma")

    console.log(user1.compareAge(user2))

    //secondo esercizio//

    class Pet{
        constructor(petName, ownerName, species, breed = ""){
            this.petName = petName;
            this.ownerName = ownerName;
            this.species = species;
            this.age = age;
            this.breed = breed;

        }
        isSameOwner(otherPet) {
            return this.ownerName === otherPet.ownerName
        }
        getDescription() {
            return this.petName + " è un " + this.species + " di " + this.age + " anni." + (this.breed ? " Razza: " + this.breed : " Razza non specificata.");
          }
    }
    let pet1 = new Pet("Mina", "Riccardo", " Gatto", "European cat") 
    let pet2 = new Pet("Toby", "Irene", " Dog", "Cavalier king") 
    let pet3 = new Pet("Minerva", "Riccardo", " Gatto", "European cat") 
    let pet4 = new Pet("Rex", "Roberto", " Dog", "German shepherd") 

    //raccolta dati form//


    let pets=[]
    document.getElementById("petForm").addEventListener("submit", function(event){
        event.preventDefault()

        let petName = document.getElementById("name").value
  let species = document.getElementById("species").value
  let age = parseInt (document.getElementById("age").value)
  let breed = document.getElementById("breed").value

  let newPet = new Pet(petName, species, age, breed)
  pets.push(newPet)
  displayPets()
  document.getElementById("petForm").reset()
})
function displayPets(){
    let petListDiv = document.getElementById("petList")
    petListDiv.innerHTML=""
    pets.forEach((pet, index) => {
        let petElement = document.createElement("div")
        petElement.textContent = (index + 1) + ". " + pet.getDescription()
        petListDiv.appendChild(petElement)
      })
}

