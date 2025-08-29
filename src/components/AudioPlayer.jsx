import { useRef, useState } from 'react'

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (playing) a.pause()
    else a.play()
  }

  return (
    <div>
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button style={styles.btn} onClick={toggle}>
        {playing ? '일시정지' : '노래 재생'}
      </button>
    </div>
  )
}

const styles = {
  btn: {
    padding: '12px 16px',
    borderRadius: 10,
    border: '1px solid #ffffffff',
    background: '#dedae4ff',
    cursor: 'pointer',
    fontFamily: "MyCustomFont",
    fontSize: 20,
    textShadow: "0.3px 0 black, 0.3px 0 black, 0 0.3px black, 0 -0.3px black",
  }
}

