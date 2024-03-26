import React, { useEffect, useState } from "react";
import styles from "../styles/anime.module.scss";

function Home() {
  const [animate, setAnimate] = useState(false);
  const [secanimate, setSecanimate] = useState(false);
  const [thirdanimate, setThirdanimate] = useState(false);

  const leftPartClasses = `${styles.leftParaContent} ${
    animate ? styles.spanContainer : ""
  }`;
  const rightPartClasses = `${styles.rightParaContent} ${
    animate ? styles.spanContainer : ""
  }`;
  const imgLeftPartition = `${styles.firstPartition} ${
    secanimate ? styles.spanContainer : ""
  }`;
  const imgmiddlePartition = `${styles.middlePartition} ${
    secanimate ? styles.spanContainer : ""
  }`;
  const imgRightPartition = `${styles.thirdPartition} ${
    secanimate ? styles.leftAnimateText : ""
  }`;
  const templateDiv1anime = `${styles.templateDiv1} ${
    secanimate ? styles.spanContainer : ""
  }`;
  const templateDiv2anime = `${styles.templateDiv2} ${
    secanimate ? styles.spanContainer : ""
  }`;
  const templateDiv3anime = `${styles.templateDiv3} ${
    secanimate ? styles.spanContainer : ""
  }`;
  const roundedDivAnime = `${styles.roundedDiv} ${
    thirdanimate ? styles.roundImgAnime : ""
  }`;
  const roundedDivcontent = `${styles.roundedDivContent} ${
    thirdanimate ? styles.roundedContentLinedown : ""
  }`;
  const sec4Head = `${styles.section4Head} ${
    thirdanimate ? styles.spanContainer : ""
  }`;
  const colContent = `${styles.section4Head} ${
    thirdanimate ? styles.spanContainer : ""
  }`;
  const col1 = `${styles.colContentPart1} ${
    thirdanimate ? styles.spanContainer : ""
  }`;
  const col2 = `${styles.colContentPart2} ${
    thirdanimate ? styles.spanContainer : ""
  }`;
  const colNum1 = `${styles.colNumPart1} ${
    thirdanimate ? styles.spanContainer : ""
  }`;
  const colNum2 = `${styles.colNumPart2} ${
    thirdanimate ? styles.spanContainer : ""
  }`;
  

  useEffect(() => {
    let path = document.querySelector('path');
    let pathlength = path.getTotalLength();

    path.style.strokeDasharray = pathlength + " " + pathlength;
    path.style.strokeDashoffset = pathlength;

    window.addEventListener("scroll", () => {
      var scrollPercent =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      var drawlength = pathlength * scrollPercent;
      path.style.strokeDashoffset = pathlength - drawlength;
    });
    const handleScroll = () => {
      const spanContainer = document.getElementById("section2");
      const animateContainer = document.getElementById("section3");
      const section4Container = document.getElementById("section4");

      if (spanContainer && animateContainer && section4Container) {
        const secBounding = spanContainer.getBoundingClientRect();
        const thirdBounding = animateContainer.getBoundingClientRect();
        const fourthBounding = section4Container.getBoundingClientRect();

        if (secBounding.top <= window.innerHeight && secBounding.bottom >= 0) {
          // Second page is in the viewport
          setSecanimate(false);
          setAnimate(true);
          setThirdanimate(false);
          // animateContainer.classList.add(`${styles.divisionFour}`)
        } else if (
          thirdBounding.top <= window.innerHeight &&
          thirdBounding.bottom >= 0
        ) {
          // Third page is in the viewport
          setSecanimate(true);
          setAnimate(false);
          setThirdanimate(false);
        } else if (
          fourthBounding.top <= window.innerHeight &&
          fourthBounding.bottom >= 0
        ) {
          // Third page is in the viewport
          setSecanimate(false);
          setAnimate(false);
          setThirdanimate(true);
        } else {
          // Not on the second or third page
          setSecanimate(false);
          setAnimate(false);
          setThirdanimate(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate, secanimate]); // Run effect only once on mount

  return (
    <div className={styles.body}>
      <section className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.div1}>
            <div className={styles.leftAnimateText}>
              <div className={styles.lineLeft}>
                THE ESSENCE <br />
                OF NATURAL ART
              </div>
            </div>
            <div className={styles.spanContainer}>
              <div class={styles.lineDown} style={{ fontSize: "6.2rem" }}>
                Discover the world
              </div>
            </div>
          </div>

          <div class={styles.div2}>
            <div className={styles.spanContainer}>
              <img
                src="https://assets.website-files.com/63285965f554791ee9971f97/632c62dbb6a91a6c1570269c_heading-02.webp"
                alt="gif image"
                className={styles.lineDown}
                style={{
                  width: "6.7rem",
                  height: "4.8rem",
                  borderTopLeftRadius: "3.125rem",
                  borderTopRightRadius: "3.125rem",
                }}
              />
            </div>

            <div class={styles.spanContainer}>
              <div
                style={{
                  fontSize: "6.2rem",
                  color: "#f3471e",
                  marginLeft: "30px",
                }}
                class={styles.lineDown}
              >
                of beautiful art
              </div>
            </div>
          </div>

          <div class={styles.spanContainer} style={{ paddingLeft: "2rem" }}>
            <div
              style={{
                fontSize: "6.2rem",
                color: "#f3471e",
                fontFamily: "Templegarten",
              }}
              class={styles.lineDown}
            >
              It's the only thing on earth
            </div>
          </div>

          <div class={styles.div4}>
            <div class={styles.spanContainer}>
              <div
                style={{ fontSize: "6.2rem", color: " #f3471e" }}
                class={styles.lineDown}
              >
                that will makes
              </div>
            </div>
            <div
              className={styles.spanContainer}
              style={{ width: "10%", marginLeft: "30px" }}
            >
              <img
                src="https://assets.website-files.com/63285965f554791ee9971f97/632964464201ff5f5e3388c3_heading-01.webp"
                alt="gifImage"
                className={styles.lineDown}
                style={{ height: "5rem", width: "6rem", paddingTop: "1rem" }}
              />
            </div>
            <div class={styles.spanContainer}>
              <div
                style={{ fontSize: "6.2rem", color: "#f3471e" }}
                class={styles.lineDown}
              >
                free.
              </div>
            </div>
          </div>

          <div className={styles.div5}>
            <p>
              One of the highest values of humanity is art. This fact is the
              basis of culture, its evolutionary factor, man always shows
              uniqueness to the world.
            </p>
            <div>
              <svg
                className={styles.svgPath}
                width="305"
                height="658"
                viewBox="0 0 305 658"
                fill="none"
                preserveAspectRatio="xMidYMax meet"
              >
                <a href="section2">
                  <path
                    d="M32 1C101.6 161 227 218.333 281 227L304 322C295.667 446.333 229 686.8 29 654C-171 621.2 -169 603.667 -143 599"
                    stroke="black"
                  />
                </a>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id= "section2"
        style={{
          width: "100%",
          height: "100vh",
          background: "lightblue",
          zIndex: "3",
          position: "relative",
        }}
      >
        <div>
          <svg
            className={styles.svgPath}
            width="228"
            height="699"
            viewBox="0 0 228 699"
            fill="none"cd
            preserveAspectRatio="xMidYMax meet"
          >
            <a href="#section2">
              <path
                d="M1 1C177.8 142.6 84 240.667 15 272L219 395L37 565L227 698"
                stroke="#F51515"
              />
            </a>
          </svg>
        </div>
        <img
          src="https://assets.website-files.com/63285965f554791ee9971f97/632964464201ff5f5e3388c3_heading-01.webp"
          alt="gifImage"
          className={styles.lineDown}
          style={{
            height: "20rem",
            width: "20rem",
            paddingTop: "1rem",
            zIndex: "1",
            position: "absolute",
          }}
        />
      </section> */}

      <section id="section2" className={styles.section2Container}>
        <div className={styles.content2Container}>
          <div className={styles.leftImgPartition}>
            <div className={animate ? styles.spanContainer : ""}>
              <div
                className={`${styles.spanContainer} ${
                  animate ? styles.lineDown : ""
                }`}
                style={{
                  fontFamily: "Templegarten",
                  fontSize: "4rem",
                  lineHeight: "0.9",
                  fontWeight: "500",
                }}
              >
                <div>Popular</div>
                <div>Paintings</div>
              </div>
            </div>

            <div className={styles.leftBottomContent}>
              <div className={animate ? styles.spanContainer : ""}>
                <div
                  className={`${styles.spanContainer} ${
                    animate ? styles.lineDown : ""
                  }`}
                >
                  <img
                    style={{ width: "23.5rem", height: "23rem", zIndex: "1" }}
                    src="https://assets.website-files.com/63285965f554791ee9971f97/63296446c0521518be207486_popular-02.webp"
                  />
                </div>
              </div>

              <div className={leftPartClasses}>
                <div
                  className={`leftPartClasses ${
                    animate ? styles.lineDown : ""
                  }`}
                >
                  <div>
                    01&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;Opening of
                    the Fifth Seal, 1608-1614
                  </div>
                  <div>by El Greco, NY Museum of Art.</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles.rightImgPartition}
            style={{ paddingLeft: "8rem" }}
          >
            <div className={animate ? styles.spanContainer : ""}>
              <img
                className={`${styles.spanContainer} ${
                  animate ? styles.lineDown : ""
                }`}
                style={{ height: "38.5rem", width: "38rem" }}
                src="https://assets.website-files.com/63285965f554791ee9971f97/632c7a33a82442465000df59_popular-01.webp"
              />
            </div>
            <div className={rightPartClasses}>
              <div
                className={`rightPartClasses ${animate ? styles.lineDown : ""}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>02</div>
                <div style={{ paddingLeft: "13rem" }}>
                  White Spirit of the Dead Watching, 1891-1892 by Paul Gauguin,
                  Art Gallery in Buffalo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3" className={styles.section3Container}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#fcf9eb",
            backgroundImage:
              "url('https://assets.website-files.com/63285965f554791ee9971f97/632c60c6edb43c4b2018fe6b_Noise2.webp')",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className={styles.content3TopContainer}>
            <div className={imgLeftPartition}>
              <div
                className={`imgLeftPartition ${
                  secanimate ? styles.lineDown : ""
                }`}
              >
                <img
                  style={{ width: "11.3rem", height: "10.5rem" }}
                  src="https://assets.website-files.com/63285965f554791ee9971f97/6329644675bf4fbcd6ffc66f_popular-03.webp"
                />

                <div style={{ paddingTop: "1rem" }}>
                  03
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apocalypse,
                  1498-1499 by Dürer
                </div>
              </div>
            </div>

            <div className={imgmiddlePartition}>
              <div
                className={`imgmiddlePartition ${
                  secanimate ? styles.lineDown : ""
                }`}
              >
                <div style={{ width: "14.8rem", height: "20rem" }}>
                  <img
                    style={{ width: "14.8rem", height: "20rem" }}
                    src="	https://assets.website-files.com/63285965f554791ee9971f97/63296447c05215829e20748e_popular-04.webp"
                  />
                </div>
                <div style={{ paddingTop: "1rem" }}>
                  04
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Doni
                  Tondo, 1507 by Michelangelo, Italy.
                </div>
              </div>
            </div>

            <div className={imgRightPartition}>
              <div
                className={`imgRightPartition ${
                  secanimate ? styles.lineLeft : ""
                }`}
              >
                <div
                  style={{
                    fontFamily: "Templegarten",
                    fontSize: "2.25rem",
                    lineHeight: "1.1",
                    fontWeight: "500",
                  }}
                >
                  Exclusive obscure <br />
                  paintings
                </div>

                <div className={styles.thirdPartitionBottom}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "2px solid  #41240f",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    <div>THE BAPTISM OF CHRIST</div>
                    <div>
                      <img
                        style={{ width: "1.8rem", height: "2rem" }}
                        src="https://assets.website-files.com/63285965f554791ee9971f97/6335adc48697379bfabdba02_ico-arrow-brown-small.svg"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid  #41240f",
                      paddingBottom: "0.8rem",
                      paddingTop: "0.8rem",
                    }}
                  >
                    <div>SCHOOL OF ATHENS</div>
                    <div>
                      <img
                        style={{ width: "1.8rem", height: "2rem" }}
                        src="https://assets.website-files.com/63285965f554791ee9971f97/6335adc48697379bfabdba02_ico-arrow-brown-small.svg"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "0.8rem",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    <div>THE WORHSIP OF VENUS</div>
                    <div>
                      <img
                        style={{ width: "1.8rem", height: "2rem" }}
                        src="https://assets.website-files.com/63285965f554791ee9971f97/6335adc48697379bfabdba02_ico-arrow-brown-small.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content3BottomContainer}>
            <div>
              <div className={styles.crossline}></div>
            </div>

            <div className={styles.contentTemplate}>
              <div style={{ height: "60%" }} className={styles.spanContainer}>
                <div
                  className={`styles.spanContainer ${
                    secanimate ? styles.lineUp : ""
                  }`}
                >
                  <img
                    style={{ width: "71rem", height: "38.4rem" }}
                    src="https://assets.website-files.com/63285965f554791ee9971f97/632c7a3443c842845df979cb_Large-collection-of-paintings.webp"
                  />
                </div>
              </div>

              <div className={styles.templateBottomContainer}>
                <div className={templateDiv1anime}>
                  <div
                    className={`templateDiv1anime ${
                      secanimate ? styles.lineDown : ""
                    }`}
                  >
                    <img
                      style={{ width: "16.5rem", height: "21.5rem" }}
                      src="https://assets.website-files.com/63285965f554791ee9971f97/6329644696255eec0b07661f_Large-collection-of-paintings_small.webp"
                    />
                  </div>
                </div>

                <div className={templateDiv2anime}>
                  <div
                    className={`templateDiv1anime ${
                      secanimate ? styles.lineDown : ""
                    }`}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div style={{ width: "100%", height: "70%" }}>
                      <div className={styles.smallHeading}>
                        A large collection of <br />
                        paintings by artists
                      </div>
                      <p
                        style={{
                          fontFamily: "Templegarten",
                          color: "#fcf9eb",
                          fontSize: "16px",
                          width: "100%",
                          lineHeight: "1.6",
                          fontWeight: "300",
                          fontFamily: "Tenor Sans",
                          paddingTop: "1.5rem",
                        }}
                      >
                        Our gallery of paintings by popular artists
                        <br /> saturates the viewer with the mysterious colors
                        <br /> of high and fine art, as well as unique shades of
                        <br />
                        the inner world of their creator.
                      </p>
                    </div>

                    <div style={{ paddingTop: "3rem", height: "30%" }}>
                      hello
                    </div>
                  </div>
                </div>

                <div className={templateDiv3anime}>
                  <div
                    className={`templateDiv3anime ${
                      secanimate ? styles.lineDown : ""
                    }`}
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className={styles.templateDiv3section}>
                      <img
                        style={{
                          width: "3.5rem",
                          height: "3.5rem",
                          paddingTop: "1rem",
                        }}
                        src="https://assets.website-files.com/63285965f554791ee9971f97/6329644675bf4f7d25ffc66d_logo.svg"
                      />
                      <p
                        style={{
                          fontFamily: "Tenor Sans",
                          color: "#fcf9eb",
                          fontSize: "16px",
                          paddingTop: "2.4rem",
                          lineHeight: "1.6",
                        }}
                      >
                        Art space and digital gallery <br />
                        with the best paintings of <br />
                        cultural heritage
                      </p>
                    </div>

                    <div
                      style={{
                        fontFamily: "Templegarten",
                        color: "#fcf9eb",
                        fontSize: "2rem",
                        fontWeight: "500",
                        height: "10%",
                        paddingTop: "1.6rem",
                      }}
                    >
                      Nature Morte
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: "100vh",
                background: "#2f4a42",
                backgroundImage:
                  "url('https://assets.website-files.com/63285965f554791ee9971f97/632964cdaf732278e755cafb_Noise.webp')",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "9vh",
                  background: "#2f4a42",
                  backgroundImage:
                    "url('https://assets.website-files.com/63285965f554791ee9971f97/632964cdaf732278e755cafb_Noise.webp')",
                  transform: "rotate(-5deg) scale(1.01)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="section4" className={styles.section4Container}>
        <div className={sec4Head}>
          <div className={`sec4Head ${thirdanimate ? styles.lineDown : ""}`}>
            <div>Renaissance left</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>mysterious</div>
              <img
                style={{
                  width: "6.5rem",
                  height: "5.2rem",
                  paddingLeft: "1.8rem",
                }}
                src="https://assets.website-files.com/63285965f554791ee9971f97/63296446becdfe21399a9b54_heading-03.webp"
              />
              <div style={{ paddingLeft: "1.8rem" }}>pictures</div>
            </div>
          </div>
        </div>

        <div className={styles.roundedImgSection}>
          <div
            style={{
              width: "32%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingRight: "2rem",
            }}
          >
            <img
              style={{ width: "13rem", height: "9.5rem" }}
              src="https://amosk.com.ua/assets/halolab/nature-morte/nature14.gif"
            />
            <p>
              05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portrait of a
              Man <br />
              with Medal of Cosimo the
              <br /> Elder, 1474–1475
              <br />
              painted by Sandro Botticelli
            </p>
          </div>
          <div style={{ width: "67%" }}>
            <img
              style={{ width: "25.9rem", height: "36.7rem" }}
              src="https://assets.website-files.com/63285965f554791ee9971f97/632964479a90f8077c4e4d2e_Renaissance-01.webp"
            />
            <div style={{ display: "inline-block", position: "relative" }}>
              <img
                style={{
                  width: "25.9rem",
                  height: "36.7rem",
                  paddingLeft: "1.2rem",
                }}
                src="https://assets.website-files.com/63285965f554791ee9971f97/6329644718c5f51303ac0321_Renaissance-02.webp"
              />
              <div className={roundedDivAnime}>
                <div
                  className={`roundedDivAnime ${
                    thirdanimate ? styles.lineDown : ""
                  }`}
                >
                  <div className={roundedDivcontent}>
                    <img
                      style={{
                        width: "1.7rem",
                        height: "1.7rem",
                        paddingTop: "3rem",
                      }}
                      src="https://assets.website-files.com/63285965f554791ee9971f97/6329644675bf4f7d25ffc66d_logo.svg"
                    />

                    <p style={{ paddingTop: "5.2rem" }}>
                      The Tower of Babel, 1563 <br />
                      by Pieter Bruegel the Elder,
                      <br /> oil on panel, the artist put <br />
                      religious meaning.
                    </p>

                    <p style={{ paddingTop: "4rem" }}>06</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.columnContentSection}>
          <div style={{width:"33%"}}>
            <div className={col1}>
              <div style={{ textIndent: "-0.5em" }} className={`col1 ${ thirdanimate ? styles.lineDown : "" }`}>
                Sandro Botticelli
              </div> 
            </div>
            <br/> 
            <div className={col1} >
              <div className={`col1 ${
                      thirdanimate ? styles.lineDown : ""}`}>is the best painter</div>
            </div>
            <br/>
            <div className={col1} >
              <div className={`col1 ${thirdanimate ? styles.lineDown : ""}`}>of the renaissance</div>
            </div>
          </div>
          
          <div className={col2}>
            <div className={`col2 ${thirdanimate ? styles.lineDown : ""}`}>
              Botticelli was endowed with the capacity for the subtlest <br />
              poetic understanding of life. For the first time he was able <br />
              to convey the subtle nuance of human experience. Joyful excitement
              alternates in his paintings melancholic reverie,
              <br /> calm contemplation unbridled passion.
            </div>
          </div>
          <div style={{ width: "33%", textAlign: "center" }}>
            <div className={colNum1}>
              <div className={`colNum1 ${thirdanimate ? styles.lineDown : ""}`}>
                2&nbsp;10
              </div>
            </div>
            <div className={colNum2}>
              <div className={`colNum2 ${thirdanimate ? styles.lineDown : ""}`}>
              OBJECTS OF ART
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section5" className={styles.section5Container}>

        <div className={styles.imgContent}>

          <div style={{width:"33%"}}>
               <img style={{width:"23.5rem" , height:"17.2rem"}}
               src="https://assets.website-files.com/63285965f554791ee9971f97/632e02cac24ca295b9c072bc_painter-01.webp" />
               <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , width:"78%"}}>
                <div>History of the painting <br />"Autumn Evening"</div>
                <div>Read</div>
               </div>
          </div>

          <div>
2
          </div>

          <div>
3
          </div>

        </div>

      </section>
    </div>
  );
}

export default Home;
