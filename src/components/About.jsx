//Aboutme
import React, { Component } from 'react';
import { Grid, Container, Segment, Header, Image } from 'semantic-ui-react';
import mapa from '../assets/Mapa de México con chinchetas Lenguas en Peligro.png';
import top from '../assets/Países top diversidad lingüística.png';
import news from '/Users/vaniamariaramirezalvarado/Nierika-Social-Network/nierika/src/assets/Noticia_El Universal.png';
class About extends Component {
  render() {
    return (
      <div>
        <Container textAlign="justified">
          <Segment>
            <Header as="h2">¿What is Nierika?</Header>
            <p>
              NIERIKA is a niche social network on development, which is founded
              on the objective to collaborate with and support the preservation
              of all the Mexican indigenous languages. This unique platform
              enables users to present and create their publications which
              contains original indigenous linguistic data and it’s closest
              translation into modern day Spanish that does justice to the
              original meaning, this in turn promotes the idea of gathering
              linguistic data for investigative and research purposes. Nierika
              intends to create a digital community for members who want to
              share, learn, study and preserve the long lost linguistic
              treasures of Mexico.  Nierika is a word from the language of
              Wixárika. There is not a single word in either Spanish or English
              that can be used to convey it’s meaning, we can only explain it
              through the phrase "a mirror in which the past and the present
              merge". The project uses modern methodologies & digital technology
              in the journey of recovering, at the same time preserving the
              linguistic past and present of our cultures. Mexico is listed as
              8th among the top 10 countries with the greatest linguistic
              diversity in the world. It has around 287-292 registered and
              immigrant languages in it’s territory.
            </p>
            <Image src={mapa} size="big" centered />

            <p>
              Map of Mexico appointed with the endangered level of the languages
              from Moseley, Christopher (ed.). 2010. Atlas of the World’s
              Languages in Danger, 3rd ed. Paris, UNESCO Publishing.
            </p>

            <Header>Disappointing present day situation</Header>
            <Image src={top} size="large" centered />
            <span floated="right">
              Graphic of “Countries with the most languages” from Ethnologue:
              Languages of the Word.
            </span>
            <p>
              Even though Mexico has a vast linguistic & cultural diversity, it
              has not been able to escape the global emergency crisis of the
              indigenous languages. Based on the report (E/C.19/2016/10) as
              discussed in United Nations Headquarters in New York majority of
              the languages that are under threat today, are the indigenous
              languages. It is estimated that one indigenous language dies in
              every two weeks. It has been reported by the Institute of
              Indigenous Languages that, in Mexico since 2007 at least 107
              indigenous languages have been lost. In spite of the initiatives
              to preserve indigenous languages, with each passing day fewer
              people want to use them. Even the families who want to pass on the
              inherited languages to their next generations are not able to, due
              to the economic and social pressures in Mexico and the world. In
              this scenario, the burning question is, "are we, as a global
              community doing enough for this cause?". Sadly the numbers say
              otherwise. We need to collaborate to establish more impactful
              strategies, initiatives and practices that are more inclusive and
              encourage the users of the indigenous languages to keep their
              linguistic culture alive. This can only be done if the global
              community and economies join hands towards this thought. Nierika
              is just a small brick contributing to the foundation of this
              cause.
            </p>
            <Header>A Ray of Hope!</Header>

            <p>
              The youth, coming from the lineage of these indigenous linguistic
              cultures are realizing the importance and revaluing their language
              and culture. Providing them with a digital platform to express
              themselves could take us in a way in the journey of supporting
              this cause: “Young indigenous people living in cities play a
              fundamental role in the process of revaluing the language, customs
              and traditions of their home communities through the use of the
              internet and social networks”, said the academic of the University
              Center of Social Sciences and Humanities, teacher Fortino
              Domínguez Rueda. (UNAM GLOBAL, “Jóvenes indígenas, revaloran su
              lengua y cultura a través de redes sociales”, January 2018)
              however users of open social networks face discrimination and lack
              of empathy when they try to overcome and express themselves in
              their own languages.
            </p>
            <Image
              src={news}
              size="medium"
              centered
              href="https://oaxaca.eluniversal.com.mx/estatal/18-02-2019/hablantes-de-lenguas-indigenas-victimas-de-constante-discriminacion"
            ></Image>
            <p>Article from El Univesal on 18th of February 2019.</p>
            <Header>
              How Nierika Could Help to Support the Preservation of Mexican
              Languages?
            </Header>
            <p>
              This Social network allows the users to login and add optional
              information for their own profile, encourage the users to post in
              their original language with their own translation and add an
              optional image from their own source. Allows also to interact
              between making comments and ranking the validation of the
              translation of the post. Nierika let access to open repository of
              indigenous languages that allows everyone to know them, affirming
              as our cultural treasure through social media. In the future there
              will be an option available to upload an audio of the language
              speaking, to request the transcription by other user, keep
              encouraging people to use their indigenous languages in digital
              platform. Allow more interaction between the users and to be
              appropriate by the users. Nierika Social Network try to be the
              mirror through which all indigenous cultures can be rediscovered
              and proudly appropriated by all in the present.
            </p>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default About;
