import { useRef } from "react"

export default function Name() {
    const counterRef = useRef()
    const handleRef = () => {
        counterRef.current.focus()
    }
    return <div>
        <input type="text" ref={counterRef} />
        <button onClick={handleRef}>Click</button>
    </div>
}