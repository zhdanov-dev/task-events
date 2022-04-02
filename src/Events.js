/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let but = document.createElement('button');
    but.textContent = 'Удали меня';
    document.body.appendChild(but);
    but.onclick = function () {
        document.getElementsByTagName('button')[0].remove();
    };
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        li.onmouseover = function () {
            li.title = li.textContent;
        };
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let href = document.createElement('a');
    href.href = 'https://tensor.ru/';
    href.textContent = 'tensor';
    href.addEventListener('click', function (event) {
        if (!this.textContent.includes('https://tensor.ru/')) {
            this.textContent = this.textContent + ' https://tensor.ru/';
            event.preventDefault();
        }
    });
    document.body.appendChild(href);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = 'Пункт';
    li.click = function () {
        this.textContent = this.textContent + '!';
    };
    ul.appendChild(li);
    let but = document.createElement('button');
    but.textContent = 'Добавить пункт';
    but.click = function () {
        let liClick = document.createElement('li');
        liClick.textContent = 'Пункт';
        liClick.click = function () {
            this.textContent = this.textContent + '!';
        };
        ul.appendChild(liClick);
    };
    document.body.appendChild(ul);
    document.body.append(but);
}
