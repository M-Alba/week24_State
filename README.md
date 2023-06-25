# week24_State
Ответы на вопросы:
1. Кратко опишите основные отличия `state` от `props`. 
- props передаётся в компонент (служат как параметры функции), а state находится внутри компонента (по аналогии с переменными, которые объявлены внутри функции).;
- в отличие от props значения в state можно изменять;
- значения из state должны использоваться при рендеринге.

2. Какую ошибку я допустила в следующем коде и как её исправить:
handleChange = () => {
    const chechedArr = this.state.arr; // [1,2,3] 
		chechedArr.push(5); // [1,2,3,5] 
        this.setState({
            arr: chechedArr,
    });
  };

Ответ: нужно рассматривать массивы в React state как доступные только для чтения, методы, которые изменяют массив не должны 
использоваться (например, push()). Можно создать новый массив из исходного, затем установить состояние на полученный массив.

3. Можно ли повесить на один элемент несколько обработчиков событий?
думаю можно

4. Каким образом можно изменить `state`?
метод setState()

5. Попробуйте предсказать, какие сообщения будут в консоли, и объяснить результат:
handleChange = () => {
    console.log(this.state.checked) //#1 false 
    this.setState({
      checked: !this.state.checked, //true
    });
    console.log(this.state.checked) //#2 ?
  };  

Ответ: false, т.к. метод setState() является асинхронным, состояние не обновиться сразу после вызова setState()

6. Какими способами можно задать функцию `handleChange` и какой из них является самым правильным?
Правильный способ определения — стрелочная функция.
handleClick = () => {
		const text = 'Hello world!';
        this.setState({ text });
  };

7. Чем отличаются классовые и функциональные компоненты? Какие из них предпочтительнее в 2021 году?
--- Функциональные компоненты (наиболее рекомендуемые):
- функциональный компонент — это функция в JavaScript/ES6, которая возвращает элемент React (JSX);
- он всегда начинается с заглавной буквы (соглашение об именах);
- при необходимости принимает props в качестве параметра;
- с приходом хуков у функциональных компонентов появилась возможность хранить состояния, использовать методы жизненного цикла и быть полноценными конкурентами классовых.
- для того, чтобы использовать компонент позже, нужно экспортировать его, а затем импортировать его в другом месте.

--- Классовый компонент:
- это класс ES6, который будет компонентом при расширении компонента (поведения или значения) React;
- принимает реквизиты (в конструкторе), если это необходимо;
- должен иметь метод render() для возврата JSX;

8. Есть ли `this` в функциональных компонентах? Как можно получить доступ к нему?
В функциональном компоненте нам недоступен this, поэтому мы не можем задать или считать состояние через this.state. Вместо этого мы вызываем хук useState напрямую изнутри нашего компонента.

9. Можно ли использовать `props` и `state` одновременно?
state и props друг от друга не зависят, и могут использоваться вместе или по отдельности.

10. Где можно задать `state` без использования команды `this.setState`?
При использовании класса-компонента единственное место, где можно установить объект state - это конструктор класса.

11. Может ли состояние классового компонента не быть объектом? А функционального?
в классовом: нет;
в функциональном: состояние может, но не обязано, быть объектом (а может быть строкой или числом)

12. Способны ли функциональные компоненты самостоятельно хранить состояние?
С приходом хуков у функциональных компонентов появилась возможность хранить состояния.

13. Как использовать хуки в классовых компонентах?
Хуки не работают внутри классов, а используются вместо них.

14. А как задать начальное состояние `props`, если они ещё не были переданы?
В React предусмотрен способ устанавливать значения пропсов по умолчанию — defaultProps.