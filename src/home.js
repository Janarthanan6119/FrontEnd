import React from 'react';
import "./styles.css"

export default function Home() {
  return (
    <>
    <div id="title">This Week Specials</div>
    <div className="middle">
      <h3 id='head'>KollyWood</h3>
      <a href='https://youtu.be/BWkP95PazWo'><img id='firstimg' src='https://gumlet.assettype.com/dtnext%2F2022-11%2Fb3e57e17-3a08-42a9-b6fe-b52bedf1a5c2%2FLuv.jpg?rect=0%2C0%2C3840%2C2160&auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6'/></a>
      {" "}{" "}
      <a href="https://youtu.be/TeV1FNneuXg"><img id='secondimg' src='https://images.cinemaexpress.com/uploads/user/imagelibrary/2022/6/6/original/Coffee_With_Kadhal_first_look.jpg?w=1200&h=800&dpr=1.3' /></a>
      {" "}{" "}
      <a href='https://youtu.be/mhPb6wxXAfM'><img id='thirdimg' src='https://telugu.samayam.com/photo/msid-93724197,imgsize-94992/pic.jpg'/></a>
      <br />
      <h3 id='twohead'>MollyWood</h3>
      <a href='https://youtu.be/yaS_HVYWMrY'><img id='fourimg' src='https://images.ottplay.com/posters/2001ee3018d35139fef605b0b7ca6b49.jpg' /></a>
      {" "}
      <a href='https://youtu.be/S55Gu4SBkcs'><img id='fiveimg' src='https://moviekoop.com/Images/Cover_Photos/1744-white-alto-movie.jpg'/></a>
      {" "}
      <a href='https://youtu.be/MNi7GaDtKRw'><img id='siximg' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MTEsIE5vdiAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342215-wumgxxbstj-portrait.jpg'/></a>
      <h3 id='thirdhead'>BollyWood</h3>
      <a href='https://youtu.be/Bw6I-KgCSP4'><img id='sevenimg' src='https://resize.indiatvnews.com/en/resize/newbucket/730_-/2021/05/hindi-movies-1622260975.jpg'/></a>
      {" "}
      <a href='https://youtu.be/tCSX4d_8oLQ'><img id='eightimg' src='https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/09/dhokha-round-d-corner-001.jpg'/></a>
      {" "}
      <a href='https://youtu.be/FLd_ZeEe9pc'><img id='nineimg' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00300917-llrgvcylxx-portrait.jpg'/></a>
      </div>
    </>
  )
}
