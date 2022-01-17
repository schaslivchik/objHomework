// 1. Cоздать объект student, который содержит следующие свойства: имя, фамилию, пол (isMale), контактные данные, методы: вывод адреса, смена пола (на противоположный).

const student = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  sex: 'male',
  city: 'Zaporozhe',
  country: 'Urkaine',
  phone: 38097111111,
  getAddres(){ 
    return `${this.city} ${this.country}` 
  },
  changePhone(newPhone){
    this.phone = newPhone;
  }
}

console.log(student.getAddres());


// 2. Cоздать объект, который содержит свойства о факультете и кафедре, методы: переименование факультета (метод должен принимать в качестве параметра новое название факультета).

const faculty = {
  nameFaculty: 'Information Technology',
  decanOfFaculty: 'Ivan Ivanich',
  phone: '380977777777',
  email: 'informationtecnlogy@gmail.com',
  changeFacyltyName(newName) {
    this.nameFaculty = newName;
  }
}


// 3 Создать функции-конструкторы:
// - книга (автор, название, год издания, издательство)
//   * предусмотреть в прототипе метод, который будет возвращать возраст книги в годах.

const Book = function(avtor, nameBook, publishAge, publishHouse, ageBook) {
  this.avtor = avtor;
  this.nameBook = nameBook;
  this.publishAge = publishAge;
  this.publishHouse = publishHouse;
  this.ageBook = ageBook;
}

Book.prototype = {
  curentYear: 2022,
  getAgeBook: function(){
    return this.ageBook = this.curentYear - this.publishAge;
  }
}

const Book1 = new Book('John Duckett','JavaScript',2017,'Kiyv Publish House', '');