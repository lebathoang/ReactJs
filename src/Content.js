/*------------ useEffect DOM event --------*/

// const tabs = ['posts', 'comments', 'albums']
// function Content() {
//   const [posts, setPosts] = useState([])
//   const [type, setType] = useState('posts')
//   const [showGoTotop, setShowGoTotop] = useState(false)

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then(res => res.json())
//       .then(posts => {
//         setPosts(posts)
//       })
//   }, [type])
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 200) {
//         setShowGoTotop(true)
//       } else {
//         setShowGoTotop(false)
//       }
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   return (
//     <div>
//       {tabs.map(tab => (
//         <button
//           key={tab}
//           style={type === tab ? {
//             color: '#fff',
//             background: '#333'
//           } : {}}
//           onClick={() => setType(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}> {post.title || post.name}</li>
//         ))}
//       </ul>
//       {showGoTotop && (
//         <button
//           style={{
//             position: "fixed",
//             right: 20,
//             bottom: 20
//           }}
//         >
//           Go To Top
//         </button>
//       )}
//     </div>
//   )
// }

/*--------- useEffect timer function ---------*/

// function Content() {
//   const [countdown, setCountdown] = useState(180)
//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setCountdown(prevState => prevState - 1)
//     }, 1000);
//     return () => clearInterval(timerId)
//   }, [])

//   return (
//     <div>
//       <h1>{countdown}</h1>
//     </div>
//   )
// }

/*-------- useLayoutEffect --------*/

// function Content() {
//   const [count, setCount] = useState(0)
//   useLayoutEffect(() => {
//     if (count > 3) {
//       setCount(0)
//     }
//   }, [count])
//   const handleRun = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleRun}>Run</button>
//     </div>
//   )
// }

/*-------- useRef -------*/

// function Content() {
//   const [count, setCount] = useState(60)
//   let timerId = useRef()
//   const prev = useRef(1)
//   useEffect(() => {
//     prev.current = count
//   }, [count])
//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount(prev => prev - 1)
//     }, 1000)
//   }
//   const handleStop = () => {
//     clearInterval(timerId.current)
//   }
//   return (
//     <div className="App" style={{ padding: 10 }}>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }
/*---------useMemo---------*/
// function Content() {
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [products, setProducts] = useState([])
//   const nameRef = useRef()
//   const handleSubmit = () => {
//     setProducts([...products, {
//       name,
//       price: Number(price)
//     }])
//     setName('')
//     setPrice('')
//     nameRef.current.focus()
//   }
//   const total = useMemo(() => {
//     const result = products.reduce((result, prod) => result + prod.price, 0)
//     return result
//   }, [products])
//   return (
//     <div className="App" style={{ padding: 10 }}>
//       <input
//         ref={nameRef}
//         value={name}
//         placeholder="Enter Name ..."
//         onChange={e => setName(e.target.value)}
//       />
//       <br />
//       <input
//         value={price}
//         placeholder="Enter Price ..."
//         onChange={e => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>Add</button>
//       <br />
//       Total: {total}
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>{product.name} - {product.price}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

/*-------useReducer-------*/
// 1: gi?? tr???  kh???i t???o
// 2: h??nh ?????ng: theo y??u c???u b??i to??n
// 3: t???o reducer => m???t h??m c?? hai ?????i s???
  // +> state ban ?????u b???ng gtr??? kh???i t???o => 
  // +> action h??nh ?????ng
// 4: dispatch == set...
/* ---- context ----*/
// 1. T???o context
// 2. Cung c???p d??? li???u
// 3. S??? d???ng d??? li???u
function Content() {
  return (
    <div>
    </div>
  )
}
export default Content