import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import Accordion from '../../components/faq/Accordion';
import '../../css/faq/accordion.css'

export default function Faq() {
  return (
    <div>
          <CommonHero pageName={"Asked Question"} />
          <Accordion/>
    </div>
  );
}
