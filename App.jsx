import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function BookVideoGenerator() {
  const [topic, setTopic] = useState("")
  const [books, setBooks] = useState("")
  const [output, setOutput] = useState("")

  const generateScript = () => {
    const bookList = books.split("\n").filter((b) => b.trim() !== "")
    if (bookList.length === 0 || topic.trim() === "") {
      setOutput("请输入主题和书籍名称。");
      return
    }

    const script = `📚【${topic}】

开头钩子：你知道这几本书能帮你${topic}吗？

推荐书单：
${bookList
      .map((book, index) => `第${index + 1}本：《${book}》，推荐理由：请添加。\n`)
      .join("")}

结尾文案：收藏这条视频，慢慢读完这些书！你还有哪些推荐？欢迎留言～`

    setOutput(script)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">小红书读书推荐视频脚本生成器</h1>
      <Card>
        <CardContent className="space-y-4 pt-4">
          <Input
            placeholder="请输入推荐主题，如：提升表达力、自我管理"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Textarea
            placeholder="每行输入一本书的名称，如：被讨厌的勇气\n高效能人士的七个习惯"
            value={books}
            onChange={(e) => setBooks(e.target.value)}
            rows={6}
          />
          <Button onClick={generateScript}>生成推荐视频脚本</Button>
          <Textarea value={output} readOnly rows={12} />
        </CardContent>
      </Card>
    </div>
  )
}