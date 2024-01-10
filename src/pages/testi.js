import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import './YourStylesheet2.css'; // Make sure to replace with your stylesheet

gsap.registerPlugin(MotionPathPlugin);

const Testi = () => {
  const [opened, setOpened] = useState(0);
  const [inPlace, setInPlace] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const images = [
    { title: 'Mini canine', url: 'https://images.unsplash.com/photo-1583551536442-0fc55ac443f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
    { title: 'Wheely tent', url: 'https://images.unsplash.com/photo-1583797227225-4233106c5a2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
    { title: 'Red food things', url: 'https://images.unsplash.com/photo-1561626450-730502dba332?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
    { title: 'Sand boat', url: 'https://images.unsplash.com/photo-1585221454166-ce690e60465f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
    { title: 'Screen thing', url: 'https://images.unsplash.com/photo-1585427795543-33cf23ea2853?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
    { title: 'Horse tornado', url: 'https://images.unsplash.com/photo-1507160874687-6fe86a78b22e?ixlib?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
  ];

  const onClick = (index) => {
    if (!disabled) setOpened(index);
  };
  const onInPlace = (index) => setInPlace(index);

  const next = () => {
    let nextIndex = opened + 1;
    if (nextIndex >= images.length) nextIndex = 0;
    onClick(nextIndex);
  };

  useEffect(() => setDisabled(true), [opened]);
  useEffect(() => setDisabled(false), [inPlace]);

  return (
    <>
      <div className="container shadow">
        {images.map((image, i) => (
          <div key={image.url} className="image" style={{ zIndex: inPlace === i ? i : images.length + 1 }}>
            <Image total={images.length} id={i} url={image.url} title={image.title} open={opened === i} inPlace={inPlace === i} onInPlace={onInPlace} />
          </div>
        ))}
        <div className="tabs">
          <Tabs className="tabs" images={images} onSelect={onClick} />
        </div>
      </div>

      <button className="button next shadow" onClick={next}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
        </svg>
      </button>
    </>
  );
};

const Image = ({ url, title, open, inPlace, id, onInPlace, total }) => {
  const [firstLoad, loaded] = useState(true);
  const clip = useRef(null);

  const gap = 10;
  const circle = 7;
  const defaults = { transformOrigin: 'center center' };
  const duration = 0.4;
  const width = 400;
  const height = 400;
  const scale = 700;

  let bigSize = circle * scale;
  let overlap = 0;

  const getPosSmall = () => ({ x: width / 2 - (total * ((circle * 2) + gap) - gap) / 2 + id * ((circle * 2) + gap), y: height - 30, scale: 1 });
  const getPosSmallAbove = () => ({ x: width / 2 - (total * ((circle * 2) + gap) - gap) / 2 + id * ((circle * 2) + gap), y: height / 2, scale: 1 });
  const getPosSmallBelow = () => ({ x: width * 0.5, y: height - 30, scale: 1 });
  const getPosCenter = () => ({ x: width / 2, y: height / 2, scale: 7 });
  const getPosEnd = () => ({ x: width / 2 - bigSize + overlap, y: height / 2, scale: scale });
  const getPosStart = () => ({ x: width / 2 + bigSize - overlap, y: height / 2, scale: scale });

  const onStateChange = () => {
    loaded(false);
    if (clip.current) {
      gsap.set(clip.current, { ...defaults, ...getPosSmall() });

      if (open) {
        gsap.timeline()
          .set(clip.current, { ...defaults, ...getPosCenter() })
          .to(clip.current, { ...defaults, ...getPosEnd(), duration, ease: 'power4.in', onComplete: () => onInPlace(id) });
      } else {
        gsap.timeline({ overwrite: true })
          .set(clip.current, { ...defaults, ...getPosStart() })
          .to(clip.current, { ...defaults, ...getPosCenter(), delay: duration, duration, ease: 'power4.out' })
          .to(clip.current, { ...defaults, motionPath: [getPosSmallAbove(), getPosSmall()], duration: 0.2, ease: 'bounce.out' });
        }
      }
    };
  
    useEffect(onStateChange, [open, clip]);
  
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice">
        <defs>
          <clipPath id={id + '_circleClip'}>
            <circle className="clip" cx="0" cy="0" r={circle} ref={clip}></circle>
          </clipPath>
          <clipPath id={id + '_squareClip'}>
            <rect className="clip" width={width} height={height}></rect>
          </clipPath>
        </defs>
        <g clipPath={`url(#${id + (inPlace ? '_squareClip' : '_circleClip')})`}>
          <image width={width} height={height} xlinkHref={url}></image>
        </g>
      </svg>
    );
  };
  
  const Tabs = ({ images, onSelect }) => {
    const gap = 10;
    const circle = 7;
    const defaults = { transformOrigin: 'center center' };
    const width = 400;
    const height = 400;
  
    const getPosX = (i) => (width / 2) - ((images.length * ((circle * 2) + gap) - gap) / 2) + (i * ((circle * 2) + gap));
    const getPosY = (i) => height - 30;
  
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice">
        {(!images ? [] : images).map((image, i) => <circle key={i} onClick={() => onSelect(i)} className="border" cx={getPosX(i)} cy={getPosY(i)} r={circle + 2}></circle>)}
      </svg>
    );
  };
  
  export default Testi;
  
