import { useState } from "react"

export default function App() {
  const [topic, setTopic] = useState("")
  const [books, setBooks] = useState("")
  const [output, setOutput] = useState("")

  const generateScript = () => {
    const bookList = books.split("\n").filter(b => b.trim() !== "")
    if (!topic || bookList.length === 0) {
      setOutput("请输入主题和书籍名称")
      return
    }
    const script = `📚【${topic}】\n\n开头钩子：你知道这几本书能帮你${topic}吗？\n\n推荐书单：\n${bookList.map((b, i) => `第${i+1}本：《${b}》，推荐理由：请添加。`).join("\n")}\n\n结尾文案：收藏这条视频，慢慢读完这些书！你还有哪些推荐？欢迎留言～`
    setOutput(script)
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>小红书读书推荐视频脚本生成器</h2>
      <input placeholder="请输入推荐主题" value={topic} onChange={e => setTopic(e.target.value)} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
      <textarea placeholder="每行一本书" value={books} onChange={e => setBooks(e.target.value)} rows={5} style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
      <button onClick={generateScript} style={{ padding: '10px 16px', background: 'black', color: 'white' }}>生成</button>
      <textarea value={output} readOnly rows={10} style={{ width: '100%', marginTop: '12px', padding: '8px' }} />
    </div>
  )
}