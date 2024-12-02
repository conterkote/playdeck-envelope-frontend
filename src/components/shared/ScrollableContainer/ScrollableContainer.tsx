import {CSSProperties, HTMLProps, UIEventHandler, useEffect, useRef, useState} from "react";

function ScrollableContainer({children, ...rest} : HTMLProps<HTMLDivElement>) {
  const scrollableContainerRef = useRef<HTMLDivElement>(null)
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const [containerContentHeight, setContainerContentHeight] = useState(0)
  const [scrollElementStyle, setScrollElementStyle] = useState<CSSProperties>({
    transform: `translateX(-50%)`,
    height: "unset"
  })
  useEffect(() => {
    if (!scrollableContainerRef.current || !scrollElementRef.current) return;

    const scrollableContainerScrollHeight = scrollableContainerRef.current.scrollHeight
    const scrollableContainerHeight = scrollableContainerRef.current.getBoundingClientRect().height
    const scrollElementHeight =
      scrollableContainerHeight * (scrollableContainerHeight / scrollableContainerScrollHeight);

    setContainerContentHeight(scrollableContainerScrollHeight)
    setContainerHeight(scrollableContainerHeight)
    setScrollElementStyle(prev => ({
      ...prev,
      height: `${scrollElementHeight}px`
    }))
  }, []);

  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const currentScrollTop = (e.target as HTMLDivElement).scrollTop
    const topOffset = (currentScrollTop / containerContentHeight) * containerHeight

    setScrollElementStyle(prev => ({
      ...prev,
      top: `${topOffset}px`
    }))
  }

  return (
    <div {...rest}>
      <div className={"bg-[#170542]/20 grid grid-cols-[1fr_24px] w-full overflow-hidden p-2.5 h-full rounded-[20px]"}>
        <div ref={scrollableContainerRef} onScroll={onScroll} style={{scrollbarWidth: "none"}}
             className={"h-full overflow-scroll space-y-4"}>
          {children}
        </div>
        <div className={"w-[2px] bg-[#3C1A55]/20 mx-auto bg-red-300 h-full relative"}>
          <div
            ref={scrollElementRef}
            style={scrollElementStyle as CSSProperties}
            className={`bg-[#6B5FE1] w-[12px] absolute top-0 left-1/2 rounded-[12px]`}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollableContainer;