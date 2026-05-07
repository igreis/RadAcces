import Spline from '@splinetool/react-spline';

export default function SplineScene({ style }: { style?: React.CSSProperties }) {
  return (
    <Spline
      scene="https://prod.spline.design/bVRxlqcq9fUxqPd6/scene.splinecode"
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}