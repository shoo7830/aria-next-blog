import React, { useEffect } from 'react';
import markdownStyles from './markdown-styles.module.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';

type Props = {
  content: string,
}




const PostBody = ({ content }: Props) => {
    useEffect(() => {
        // 코드 블록을 찾아 highlight.js 적용
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block as HTMLElement);
        });
    }, []);
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
