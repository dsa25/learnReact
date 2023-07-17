### React 
React — это бесплатная библиотека JavaScript с открытым исходным кодом для разработки пользовательского интерфейса, которая использует компоненты для создания выходных данных для одностраничных приложений. React был разработан Facebook (Meta) и поддерживается сообществом разработчиков.

##### Двустороннее связывание:
```js
import { useState } from "react"
function NameComponent() {
  const [value, setValue] = useState('')
  return (
      <>
          <span>{value}</span>
          <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
      </>
  )
}
```

### React Hooks
Хуки позволяют функциональным компонентам React иметь состояние (state) и методы жизненного цикла (lifecycle methods) подобно классовым компонентам. Появление хуков привело к тому в настоящее время классовые компоненты в React почти не используются.

#### 1) useState
Хук useState() предназначен для управления состоянием компонента. Данная функция возвращает пару геттер/сеттер - значение начального состояния и функцию для обновления этого значения. Функцию имеет следующую сигнатуру  
`const [value, setValue] = useState(defaultValue)`
```js
const [age, setAge] = useState(19)
```



#### 2) useEffect
Хук useEffect() предназначен для запуска побочных эффектов (например, выполнение сетевого запроса или добавление обработчика событий) после монтирования и отрисовки компонента.
Данная функция принимает колбек и массив зависимостей. Что касается массива зависимостей, то логика следующая:

- массив не указан: эффект запускается при каждом рендеринге
- указан пустой массив: эффект запускается только один раз
- указан массив с элементами: эффект запускается при изменении любого элемента   
- Очистка эффектов производится посредством возвращения значений из хука.
```js
  useEffect(() => {
    fetchPosts()
    console.log("useEffect")
  }, [page, limit]) // отслеживаем текущую страницу, при изменении page или limit  будет запрос
```



#### 3) useContext
Хук useContext() предназначен для прямой передачи пропов компонентам, находящимся на любом уровне вложенности.
Он позволяет избежать так называемого "бурения пропов" (prop drilling), т.е. необходимости последовательной передачи пропов на каждом уровне вложенности.   
Создание контекста:
```js
import { createContext } from "react"
export const AuthContext = createContext(null)
```
Передача значения контекста нижележащим компонентам:
```js
import { AuthContext } from "@/context"
...
<AuthContext.Provider
  value={{
    isAuth,
    setIsAuth,
    isLoading
  }}
>
  <BrowserRouter>
    <header />
    <AppRouter />
  </BrowserRouter>
</AuthContext.Provider>
```
Получение значения контекста:
```js
import { useContext } from "react"
import { AuthContext } from "@/context"
function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext)
 return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:idPost" element={<PostIdPage />} />
          <Route path="/login" element={<Navigate to="/posts" />} />
        </>
      ) : (
        <>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  )
}
```
Базовый пример
```js
const ChangeTheme = () => {
  const [mode, setMode] = useState('light')

  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const ThemeContext = createContext(mode)

  const theme = useContext(ThemeContext)

  return (
    <div
      style={{
        background: theme === 'light' ? '#eee' : '#222',
        color: theme === 'light' ? '#222' : '#eee',
        display: 'grid',
        placeItems: 'center',
        minWidth: '320px',
        minHeight: '320px',
        borderRadius: '4px'
      }}
    >
      <p>Выбранная тема: {theme}.</p>
      <button onClick={handleClick}>Поменять тему оформления</button>
    </div>
  )
}
```



#### 4) useCallback
Хук useCallback() возвращает мемоизированную версию переданной функции обратного вызова. Данный хук принимает колбек и массив зависимостей. колбек повторно вычисляется только при изменении значений одной из зависимостей. Хук имеет следующую сигнатуру:
```js
useCallback(
  fn,
  [deps]
) // deps - dependencies, зависимости
```


#### 5) useMemo
Аналог `computed` свойства во Vue   
Хук useMemo() является альтернативой хука useCallback(), но принимает любые значения, а не только функции. Данный хук имеет следующую сигнатуру:
```js
useMemo(() => {
  fn,
  [deps]
}) // deps - зависимости
```
`/hooks/usePosts`:
```js
import { useMemo } from "react"

export const useSortPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log("search....")
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    )
  }, [query, sortedPosts])

  return sortedAndSearchedPosts
}
```

#### 6) useRef
Хук useRef() возвращает объект, свойство current которого содержит ссылку на узел DOM.   
Данный хук также может использоваться для сохранения любого мутирующего значения.  
Создание хука: `const node = useRef()`.  
Добавление ссылки: `<tagName ref={node}></tagName>`.   
Получение доступа к DOM-элементу:
```js
const DomAccess = () => {
  const textareaEl = useRef(null)

  const handleClick = () => {
    textareaEl.current.value = 'Изучай хуки внимательно! Они не так просты, как кажется'
    textareaEl.current.focus()
  }

  return (
    <>
      <button onClick={handleClick}>Получить сообщение.</button>
      <label htmlFor='message'>
        После нажатия кнопки в поле для ввода текста появится сообщение.
      </label>
      <textarea ref={textareaEl} id='message' />
    </>
  )
}
```
