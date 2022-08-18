import { Stage, Container, Sprite, Text, useTick, SimpleMesh } from '@inlet/react-pixi';
import { NextPage } from 'next';
import { useReducer, useRef } from 'react';

const styles = {
    container: {
        width: 300,
        margin: '0 auto',
    }
}

const Pixi: NextPage = () => {
    const reducer = (_, { data }) => data
    const Bunny = () => {
      const [motion, update] = useReducer(reducer)
      const iter = useRef(0)
      useTick(delta => {
        const i = (iter.current += 0.05 * delta)
        update({
          type: 'update',
          data: {
            x: Math.sin(i) * 100,
            y: Math.sin(i / 1.5) * 100,
            rotation: Math.sin(i) * Math.PI,
            anchor: Math.sin(i / 2),
          },
        })
      })
      return (
        <Sprite
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          {...motion}
        />
      )
    }
    return (
        <div style={styles.container}>
            <Stage width={300} height={300} options={{ backgroundAlpha: 0 }}>
                <Container position={[150, 150]}>
                <Bunny />
                </Container>
            </Stage>
      </div>
    )
}

export default Pixi;