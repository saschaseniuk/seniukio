import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <div className="pb-8 px-6">
          <p className="">
            Der bequemste Weg ist sicher eine E-Mail. In dringenden Fällen
            kannst Du mich natürlich anrufen. Aber möchtest Du mich jetzt
            wirklich stören?
          </p>
          <div className="flex justify-around py-12 md:hidden">
            <a href="mailto:sascha@seniuk.io">
              <button className="bg-green-400 text-4xl rounded py-2 px-8">
                E-Mail
              </button>
            </a>
            <a href="tel:+4915252410129">
              <button className="bg-green-400 text-4xl rounded py-2 px-8">
                Telefon
              </button>
            </a>
          </div>
          <div className="md:flex justify-around py-12 hidden">
          <a href="mailto:sascha@seniuk.io">
            <button className="bg-green-400 text-xl rounded py-2 px-8">
              sascha@seniuk.io
            </button>
          </a>
            <button className="cursor-default bg-green-400 text-xl rounded py-2 px-8">
              +49 1525 - 2410129
            </button>
          </div>
          <form className="">
            <p className="mb-4">
              Du benutzt gerne Kontaktformulare? Dann nimm doch dieses hier.
            </p>

            <label className="block mb-2 text-green-400" htmlFor="first-name">
              Dein Name
            </label>

            <input
              className="w-full mb-6 form-input"
              id="first-name"
              placeholder="Darkwing Duck"
              type="text"
            />

            <label className="block mb-2 text-green-400" htmlFor="last-name">
              E-Mail
            </label>

            <input
              className="w-full mb-6 form-input"
              id="last-name"
              placeholder="darkwing@duck-enterprises.com"
              type="text"
            />

            <label className="block mb-2 text-green-400" htmlFor="message">
              Nachricht
            </label>

            <textarea
              className="w-full mb-6 form-textarea"
              id="message"
              placeholder="Darkwing Duck&#10;So ein Vogel kommt sofort geflogen.&#10;Darkwing Duck&#10;Zwo-Eins-Risiko&#10;Darkwing Duck"
              rows="8"
            />

            <button className="bg-green-400 rounded p-2">Senden*</button>
            <p className="my-4 text-xs text-gray-400">
              * Deine Daten werden nur für die Kontaktaufnahme genutzt.
              Selbstverständlich werden Deine Daten nicht weitergegeben oder für
              Werbung genutzt
            </p>
          </form>
        </div>

        <div class="text-white text-xs mb-4 px-6 space-y-4">
          <h2>Impressum</h2>
          <h2>Diensteanbieter</h2>
          <p>Sascha Seniuk</p>
          <p>Wachendorfer Weg 1</p>
          <p>53902 Bad Münstereifel</p>
          <h2>Kontaktmöglichkeiten</h2>
          <p>E-Mail-Adresse: sascha@seniuk.io</p>
          <p>Telefon: +491525-2410129</p>
          <h2>Journalistisch-redaktionelle Angebote</h2>
          <p>Inhaltlich verantwortlich: Sascha Seniuk (Adresse wie oben)</p>
          <h2>Social Media und andere Onlinepräsenzen</h2>
          <p>
            Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen
            und Onlineprofile:
          </p>
          <p>
            <a href="https://www.facebook.com/sascha.seniuk/">
              https://www.facebook.com/sascha.seniuk/
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/sascha.seniuk">
              https://www.instagram.com/sascha.seniuk
            </a>
          </p>
          <p>
            <a href="https://twitter.com/seniuk_">
              https://twitter.com/seniuk_
            </a>
          </p>
          <h2>Haftungs- und Urheberrechtshinweise</h2>
          <p>
            Haftungsausschluss: Die Inhalte dieses Onlineangebotes wurden
            sorgfältig und nach unserem aktuellen Kenntnisstand erstellt, dienen
            jedoch nur der Information und entfalten keine rechtlich bindende
            Wirkung, sofern es sich nicht um gesetzlich verpflichtende
            Informationen (z.B. das Impressum, die Datenschutzerklärung, AGB
            oder verpflichtende Belehrungen von Verbrauchern) handelt. Wir
            behalten uns vor, die Inhalte vollständig oder teilweise zu ändern
            oder zu löschen, soweit vertragliche Verpflichtungen unberührt
            bleiben. Alle Angebote sind freibleibend und unverbindlich.
          </p>
          <p>
            Links auf fremde Webseiten: Inhalte fremder Webseiten, auf die wir
            direkt oder indirekt verweisen, liegen außerhalb unseres
            Verantwortungsbereiches und machen wir uns nicht zu Eigen. Für alle
            Inhalte und insbesondere für Schäden, die aus der Nutzung der in den
            verlinkten Webseiten aufrufbaren Informationen entstehen, haftet
            allein der Anbieter der verlinkten Webseiten.
          </p>
          <p>
            Urheberrechte und Markenrechte: Alle auf dieser Website
            dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und
            Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte,
            Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw.
            unterliegen unseren Rechten oder den Rechten der jeweiligen Urheber
            bzw. Rechteverwalter.
          </p>
          <p>
            Hinweise auf Rechtsverstöße: Sollten Sie innerhalb unseres
            Internetauftritts Rechtsverstöße bemerken, bitten wir Sie uns auf
            diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach
            Kenntnisnahme unverzüglich entfernen.
          </p>
          <h2>Bildnachweise</h2>
          <h3>Bildquellen und Urheberrechtshinweise:</h3>
          <p>Foto auf der Startseite - Ingo Mahlberg</p>
        </div>
        <div class="text-white text-xs mb-4 px-6 space-y-4">
          <h2>Datenschutzerklärung</h2>
          <p>
            Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
            aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
            auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in
            welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle
            von uns durchgeführten Verarbeitungen personenbezogener Daten,
            sowohl im Rahmen der Erbringung unserer Leistungen als auch
            insbesondere auf unseren Webseiten, in mobilen Applikationen sowie
            innerhalb externer Onlinepräsenzen, wie z.B. unserer
            Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
            "Onlineangebot“).
          </p>
          <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
          <p>Stand: 15. Mai 2020</p>
          <p>
            Verantwortlicher Sascha Seniuk Wachendorfer Weg 1 53902 Bad
            Münstereifel
          </p>
          <p>E-Mail-Adresse: sascha@seniuk.io</p>
          <p>Telefon: +491525-2410129</p>
          <p>
            Übersicht der Verarbeitungen Die nachfolgende Übersicht fasst die
            Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung
            zusammen und verweist auf die betroffenen Personen.
          </p>
          <p>
            Arten der verarbeiteten Daten Bestandsdaten (z.B. Namen, Adressen).
            Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos). Kontaktdaten
            (z.B. E-Mail, Telefonnummern). Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen). Nutzungsdaten (z.B. besuchte
            Webseiten, Interesse an Inhalten, Zugriffszeiten). Vertragsdaten
            (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie). Kategorien
            betroffener Personen Nutzer (z.B. Webseitenbesucher, Nutzer von
            Onlinediensten). Zwecke der Verarbeitung Affiliate-Nachverfolgung.
            Content Delivery Network (CDN). Kontaktanfragen und Kommunikation.
            Remarketing. Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
            wiederkehrender Besucher). Tracking (z.B.
            interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies).
            Maßgebliche Rechtsgrundlagen Im Folgenden teilen wir die
            Rechtsgrundlagen der Datenschutzgrundverordnung (DSGVO), auf deren
            Basis wir die personenbezogenen Daten verarbeiten, mit. Bitte
            beachten Sie, dass zusätzlich zu den Regelungen der DSGVO die
            nationalen Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und
            Sitzland gelten können. Sollten ferner im Einzelfall speziellere
            Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
            Datenschutzerklärung mit.
          </p>
          <p>
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO) - Die betroffene
            Person hat ihre Einwilligung in die Verarbeitung der sie
            betreffenden personenbezogenen Daten für einen spezifischen Zweck
            oder mehrere bestimmte Zwecke gegeben. Vertragserfüllung und
            vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO) - Die
            Verarbeitung ist für die Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
            betroffenen Person erfolgen. Berechtigte Interessen (Art. 6 Abs. 1
            S. 1 lit. f. DSGVO) - Die Verarbeitung ist zur Wahrung der
            berechtigten Interessen des Verantwortlichen oder eines Dritten
            erforderlich, sofern nicht die Interessen oder Grundrechte und
            Grundfreiheiten der betroffenen Person, die den Schutz
            personenbezogener Daten erfordern, überwiegen. Nationale
            Datenschutzregelungen in Deutschland: Zusätzlich zu den
            Datenschutzregelungen der Datenschutz-Grundverordnung gelten
            nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört
            insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener
            Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG).
            Das BDSG enthält insbesondere Spezialregelungen zum Recht auf
            Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur
            Verarbeitung besonderer Kategorien personenbezogener Daten, zur
            Verarbeitung für andere Zwecke und zur Übermittlung sowie
            automatisierten Entscheidungsfindung im Einzelfall einschließlich
            Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke
            des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
            Hinblick auf die Begründung, Durchführung oder Beendigung von
            Beschäftigungsverhältnissen sowie die Einwilligung von
            Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen
            Bundesländer zur Anwendung gelangen.
          </p>
          <p>
            Sicherheitsmaßnahmen Wir treffen nach Maßgabe der gesetzlichen
            Vorgaben unter Berücksichtigung des Stands der Technik, der
            Implementierungskosten und der Art, des Umfangs, der Umstände und
            der Zwecke der Verarbeitung sowie der unterschiedlichen
            Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
            Rechte und Freiheiten natürlicher Personen geeignete technische und
            organisatorische Maßnahmen, um ein dem Risiko angemessenes
            Schutzniveau zu gewährleisten.
          </p>
          <p>
            Zu den Maßnahmen gehören insbesondere die Sicherung der
            Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
            Kontrolle des physischen und elektronischen Zugangs zu den Daten als
            auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
            Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben
            wir Verfahren eingerichtet, die eine Wahrnehmung von
            Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
            Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den
            Schutz personenbezogener Daten bereits bei der Entwicklung bzw.
            Auswahl von Hardware, Software sowie Verfahren entsprechend dem
            Prinzip des Datenschutzes, durch Technikgestaltung und durch
            datenschutzfreundliche Voreinstellungen.
          </p>
          <p>
            SSL-Verschlüsselung (https): Um Ihre via unser Online-Angebot
            übermittelten Daten zu schützen, nutzen wir eine
            SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen
            an dem Präfix https:// in der Adresszeile Ihres Browsers.
          </p>
          <p>
            Bereitstellung des Onlineangebotes und Webhosting Um unser
            Onlineangebot sicher und effizient bereitstellen zu können, nehmen
            wir die Leistungen von einem oder mehreren Webhosting-Anbietern in
            Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das
            Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
            Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
            Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
            technische Wartungsleistungen in Anspruch nehmen.
          </p>
          <p>
            Zu den im Rahmen der Bereitstellung des Hostingangebotes
            verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes
            betreffenden Angaben gehören, die im Rahmen der Nutzung und der
            Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse,
            die notwendig ist, um die Inhalte von Onlineangeboten an Browser
            ausliefern zu können, und alle innerhalb unseres Onlineangebotes
            oder von Webseiten getätigten Eingaben.
          </p>
          <p>
            Erhebung von Zugriffsdaten und Logfiles: Wir selbst (bzw. unser
            Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server
            (sogenannte Serverlogfiles). Zu den Serverlogfiles können die
            Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
            Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
            erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem
            des Nutzers, Referrer URL (die zuvor besuchte Seite) und im
            Regelfall IP-Adressen und der anfragende Provider gehören.
          </p>
          <p>
            Die Serverlogfiles können zum einen zu Zwecken der Sicherheit
            eingesetzt werden, z.B., um eine Überlastung der Server zu vermeiden
            (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten
            DDoS-Attacken) und zum anderen, um die Auslastung der Server und
            ihre Stabilität sicherzustellen.
          </p>
          <p>
            Content-Delivery-Network: Wir setzen ein "Content-Delivery-Network"
            (CDN) ein. Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte eines
            Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder
            Programm-Skripte, mit Hilfe regional verteilter und über das
            Internet verbundener Server schneller und sicherer ausgeliefert
            werden können.
          </p>
          <p>
            Verarbeitete Datenarten: Inhaltsdaten (z.B. Texteingaben,
            Fotografien, Videos), Nutzungsdaten (z.B. besuchte Webseiten,
            Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten
            (z.B. Geräte-Informationen, IP-Adressen). Betroffene Personen:
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten). Zwecke
            der Verarbeitung: Content Delivery Network (CDN). Rechtsgrundlagen:
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
            Eingesetzte Dienste und Diensteanbieter:
          </p>
          <p>
            Amazon Web Services (AWS): Webhosting und infrastrukturelle
            Dienstleistungen; Dienstanbieter: Amazon Web Services, Inc., 410
            Terry Avenue North, Seattle WA 98109, USA; Website:{" "}
            <a href="https://aws.amazon.com/de/">https://aws.amazon.com/de/</a>;
            Datenschutzerklärung:{" "}
            <a href="https://aws.amazon.com/de/privacy/?nc1=f_pr">
              https://aws.amazon.com/de/privacy/?nc1=f_pr
            </a>
            ; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung
            von Daten in den USA):{" "}
            <a href="https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&amp;status=Active">
              https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&amp;status=Active
            </a>
            . Affiliate-Programme und Affiliate-Links In unser Onlineangebot
            binden wir sogenannte Affiliate-Links oder andere Verweise (zu denen
            z.B. Rabatt-Codes gehören können) auf die Angebote und Leistungen
            von Drittanbietern ein (zusammenfassend bezeichnet als
            "Affiliate-Links"). Wenn Nutzer den Affiliate-Links folgen, bzw.
            anschließend die Angebote wahrnehmen, können wir von diesen
            Drittanbietern eine Provision oder sonstige Vorteile erhalten
            (zusammenfassend bezeichnet als "Provision").
          </p>
          <p>
            Um nachverfolgen zu können, ob die Nutzer die Angebote eines von uns
            eingesetzten Affiliate-Links wahrgenommen haben, ist es notwendig,
            dass die jeweiligen Drittanbieter erfahren, dass die Nutzer einem
            innerhalb unseres Onlineangebotes eingesetzten Affiliate-Link
            gefolgt sind. Die Zuordnung der Affiliate-Links zu den jeweiligen
            Geschäftsabschlüssen oder zu sonstigen Aktionen (z.B. Käufen) dient
            alleine dem Zweck der Provisionsabrechnung und wird aufgehoben,
            sobald sie für den Zweck nicht mehr erforderlich ist.
          </p>
          <p>
            Für die Zwecke der vorgenannten Zuordnung der Affiliate-Links können
            die Affiliate-Links um bestimmte Werte ergänzt werden, die ein
            Bestandteil des Links sind oder anderweitig, z.B. in einem Cookie,
            gespeichert werden können. Zu den Werten können insbesondere die
            Ausgangswebseite (Referrer), der Zeitpunkt, eine Online-Kennung der
            Betreiber der Webseite, auf der sich der Affiliate-Link befand, eine
            Online-Kennung des jeweiligen Angebotes, die Art des verwendeten
            Links, die Art des Angebotes und eine Online-Kennung des Nutzers
            gehören.
          </p>
          <p>
            Hinweise zu Rechtsgrundlagen: Sofern wir die Nutzer um deren
            Einwilligung in den Einsatz der Drittanbieter bitten, ist die
            Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ferner
            kann deren Einsatz ein Bestandteil unserer (vor)vertraglichen
            Leistungen sein, sofern der Einsatz der Drittanbieter in diesem
            Rahmen vereinbart wurde. Ansonsten werden die Daten der Nutzer auf
            Grundlage unserer berechtigten Interessen (d.h. Interesse an
            effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen)
            verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
            Informationen zur Verwendung von Cookies in dieser
            Datenschutzerklärung hinweisen.
          </p>
          <p>
            Verarbeitete Datenarten: Vertragsdaten (z.B. Vertragsgegenstand,
            Laufzeit, Kundenkategorie), Nutzungsdaten (z.B. besuchte Webseiten,
            Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten
            (z.B. Geräte-Informationen, IP-Adressen). Betroffene Personen:
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten). Zwecke
            der Verarbeitung: Affiliate-Nachverfolgung. Rechtsgrundlagen:
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Vertragserfüllung
            und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO),
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
            Eingesetzte Dienste und Diensteanbieter:
          </p>
          <p>
            Amazon-Partnerprogramm: Amazon - Partnerprogramm - Amazon und das
            Amazon-Logo sind Warenzeichen von Amazon.com, Inc. oder eines seiner
            verbundenen Unternehmen. Dienstanbieter: Amazon Europe Core
            S.à.r.l., die Amazon EU S.à.r.l, die Amazon Services Europe S.à.r.l.
            und die Amazon Media EU S.à.r.l., alle vier ansässig in 38, avenue
            John F. Kennedy, L-1855 Luxemburg, sowie Amazon Instant Video
            Germany GmbH, Domagkstr. 28, 80807 München (zusammen "Amazon
            Europe"), Mutterunternehmen: Amazon.com, Inc., 2021 Seventh Ave,
            Seattle, Washington 98121, USA.; Website:{" "}
            <a href="https://www.amazon.de">https://www.amazon.de</a>;
            Datenschutzerklärung:{" "}
            <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010">
              https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
            </a>
            ; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung
            von Daten in den USA):{" "}
            <a href="https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&amp;status=Active">
              https://www.privacyshield.gov/participant?id=a2zt0000000TOWQAA4&amp;status=Active
            </a>
            . Präsenzen in sozialen Netzwerken (Social Media) Wir unterhalten
            Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in
            diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu
            kommunizieren oder um Informationen über uns anzubieten.
          </p>
          <p>
            Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des
            Raumes der Europäischen Union verarbeitet werden können. Hierdurch
            können sich für die Nutzer Risiken ergeben, weil so z.B. die
            Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im
            Hinblick auf US-Anbieter, die unter dem Privacy-Shield zertifiziert
            sind oder vergleichbare Garantien eines sicheren Datenschutzniveaus
            bieten, weisen wir darauf hin, dass sie sich damit verpflichten, die
            Datenschutzstandards der EU einzuhalten.
          </p>
          <p>
            Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im
            Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So
            können z.B. anhand des Nutzungsverhaltens und sich daraus ergebender
            Interessen der Nutzer Nutzungsprofile erstellt werden. Die
            Nutzungsprofile können wiederum verwendet werden, um z.B.
            Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die
            mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken
            werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert,
            in denen das Nutzungsverhalten und die Interessen der Nutzer
            gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
            unabhängig der von den Nutzern verwendeten Geräte gespeichert werden
            (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen
            sind und bei diesen eingeloggt sind).
          </p>
          <p>
            Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen
            und der Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die
            Datenschutzerklärungen und Angaben der Betreiber der jeweiligen
            Netzwerke.
          </p>
          <p>
            Auch im Fall von Auskunftsanfragen und der Geltendmachung von
            Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten
            bei den Anbietern geltend gemacht werden können. Nur die Anbieter
            haben jeweils Zugriff auf die Daten der Nutzer und können direkt
            entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie
            dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
          </p>
          <p>
            Verarbeitete Datenarten: Bestandsdaten (z.B. Namen, Adressen),
            Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B.
            Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte
            Webseiten, Interesse an Inhalten, Zugriffszeiten),
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
            Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von
            Onlinediensten). Zwecke der Verarbeitung: Kontaktanfragen und
            Kommunikation, Tracking (z.B. interessens-/verhaltensbezogenes
            Profiling, Nutzung von Cookies), Remarketing, Reichweitenmessung
            (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).
            Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
            DSGVO). Eingesetzte Dienste und Diensteanbieter:
          </p>
          <p>
            Instagram : Soziales Netzwerk; Dienstanbieter: Instagram Inc., 1601
            Willow Road, Menlo Park, CA, 94025, USA; Website:{" "}
            <a href="https://www.instagram.com">https://www.instagram.com</a>;
            Datenschutzerklärung:{" "}
            <a href="https://instagram.com/about/legal/privacy">
              https://instagram.com/about/legal/privacy
            </a>
            . Facebook: Soziales Netzwerk; Dienstanbieter: Facebook Ireland
            Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland,
            Mutterunternehmen: Facebook, 1 Hacker Way, Menlo Park, CA 94025,
            USA; Website:{" "}
            <a href="https://www.facebook.com">https://www.facebook.com</a>;
            Datenschutzerklärung:{" "}
            <a href="https://www.facebook.com/about/privacy">
              https://www.facebook.com/about/privacy
            </a>
            ; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung
            von Daten in den USA):{" "}
            <a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active">
              https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active
            </a>
            ; Widerspruchsmöglichkeit (Opt-Out): Einstellungen für
            Werbeanzeigen:{" "}
            <a href="https://www.facebook.com/settings?tab=ads">
              https://www.facebook.com/settings?tab=ads
            </a>
            ; Zusätzliche Hinweise zum Datenschutz: Vereinbarung über gemeinsame
            Verarbeitung personenbezogener Daten auf Facebook-Seiten:{" "}
            <a href="https://www.facebook.com/legal/terms/page_controller_addendum">
              https://www.facebook.com/legal/terms/page_controller_addendum
            </a>
            , Datenschutzhinweise für Facebook-Seiten:{" "}
            <a href="https://www.facebook.com/legal/terms/information_about_page_insights_data">
              https://www.facebook.com/legal/terms/information_about_page_insights_data
            </a>
            . Twitter: Soziales Netzwerk; Dienstanbieter: Twitter Inc., 1355
            Market Street, Suite 900, San Francisco, CA 94103, USA;
            Datenschutzerklärung:{" "}
            <a href="https://twitter.com/de/privacy">
              https://twitter.com/de/privacy
            </a>
            , (Einstellungen){" "}
            <a href="https://twitter.com/personalization">
              https://twitter.com/personalization
            </a>
            ; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung
            von Daten in den USA):{" "}
            <a href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active">
              https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active
            </a>
            . Löschung von Daten Die von uns verarbeiteten Daten werden nach
            Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur
            Verarbeitung erlaubten Einwilligungen widerrufen werden oder
            sonstige Erlaubnisse entfallen (z.B., wenn der Zweck der
            Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht
            erforderlich sind).
          </p>
          <p>
            Sofern die Daten nicht gelöscht werden, weil sie für andere und
            gesetzlich zulässige Zwecke erforderlich sind, wird deren
            Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden
            gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für
            Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt
            werden müssen oder deren Speicherung zur Geltendmachung, Ausübung
            oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte
            einer anderen natürlichen oder juristischen Person erforderlich ist.
          </p>
          <p>
            Weitere Hinweise zu der Löschung von personenbezogenen Daten können
            ferner im Rahmen der einzelnen Datenschutzhinweise dieser
            Datenschutzerklärung erfolgen.
          </p>
          <p>
            Änderung und Aktualisierung der Datenschutzerklärung Wir bitten Sie,
            sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu
            informieren. Wir passen die Datenschutzerklärung an, sobald die
            Änderungen der von uns durchgeführten Datenverarbeitungen dies
            erforderlich machen. Wir informieren Sie, sobald durch die
            Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)
            oder eine sonstige individuelle Benachrichtigung erforderlich wird.
          </p>
          <p>
            Sofern wir in dieser Datenschutzerklärung Adressen und
            Kontaktinformationen von Unternehmen und Organisationen angeben,
            bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
            können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
          </p>
          <p>
            Rechte der betroffenen Personen Ihnen stehen als Betroffene nach der
            DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis
            18 und 21 DSGVO ergeben:
          </p>
          <p>
            Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus
            Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
            der Sie betreffenden personenbezogenen Daten, die aufgrund von Art.
            6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
            gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
            Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
            Widerspruch gegen die Verarbeitung der Sie betreffenden
            personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
            dies gilt auch für das Profiling, soweit es mit solcher
            Direktwerbung in Verbindung steht. Widerrufsrecht bei
            Einwilligungen: Sie haben das Recht, erteilte Einwilligungen
            jederzeit zu widerrufen. Auskunftsrecht: Sie haben das Recht, eine
            Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet
            werden und auf Auskunft über diese Daten sowie auf weitere
            Informationen und Kopie der Daten entsprechend den gesetzlichen
            Vorgaben. Recht auf Berichtigung: Sie haben entsprechend den
            gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
            betreffenden Daten oder die Berichtigung der Sie betreffenden
            unrichtigen Daten zu verlangen. Recht auf Löschung und Einschränkung
            der Verarbeitung: Sie haben nach Maßgabe der gesetzlichen Vorgaben
            das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich
            gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen
            Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
            Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie betreffende
            Daten, die Sie uns bereitgestellt haben, nach Maßgabe der
            gesetzlichen Vorgaben in einem strukturierten, gängigen und
            maschinenlesbaren Format zu erhalten oder deren Übermittlung an
            einen anderen Verantwortlichen zu fordern. Beschwerde bei
            Aufsichtsbehörde: Sie haben ferner nach Maßgabe der gesetzlichen
            Vorgaben das Recht, bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres
            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes Beschwerde
            einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
            betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
            Begriffsdefinitionen In diesem Abschnitt erhalten Sie eine Übersicht
            über die in dieser Datenschutzerklärung verwendeten
            Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und
            vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen
            sind verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor
            allem dem Verständnis dienen. Die Begriffe sind alphabetisch
            sortiert.
          </p>
          <p>
            Affiliate-Nachverfolgung: Im Rahmen der Affiliate-Nachverfolgung
            werden Links, mit deren Hilfe die verlinkenden Webseiten Nutzer zu
            Webseiten mit Produkt- oder sonstigen Angeboten verweisen,
            protokolliert. Die Betreiber der jeweils verlinkenden Webseiten
            können eine Provision erhalten, wenn Nutzer diesen sogenannten
            Affiliate-Links folgen und anschließend die Angebote wahrnehmen
            (z.B. Waren kaufen oder Dienstleistungen in Anspruch nehmen). Hierzu
            ist es erforderlich, dass die Anbieter nachverfolgen können, ob
            Nutzer, die sich für bestimmte Angebote interessieren, diese
            anschließend auf die Veranlassung der Affiliate-Links wahrnehmen.
            Daher ist es für die Funktionsfähigkeit von Affiliate-Links
            erforderlich, dass sie um bestimmte Werte ergänzt werden, die ein
            Bestandteil des Links werden oder anderweitig, z.B. in einem Cookie,
            gespeichert werden. Zu den Werten gehören insbesondere die
            Ausgangswebseite (Referrer), der Zeitpunkt, eine Online-Kennung der
            Betreiber der Webseite, auf der sich der Affiliate-Link befand, eine
            Online-Kennung des jeweiligen Angebotes, eine Online-Kennung des
            Nutzers als auch nachverfolgungsspezifische Werte, wie, z.B.
            Werbemittel-ID, Partner-ID und Kategorisierungen. Content Delivery
            Network (CDN): Ein "Content Delivery Network" (CDN) ist ein Dienst,
            mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große
            Mediendateien, wie Grafiken oder Programm-Skripte mit Hilfe regional
            verteilter und über das Internet verbundener Server, schneller und
            sicherer ausgeliefert werden können. Personenbezogene Daten:
            "Personenbezogene Daten“ sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person (im Folgenden
            "betroffene Person“) beziehen; als identifizierbar wird eine
            natürliche Person angesehen, die direkt oder indirekt, insbesondere
            mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
            Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie)
            oder zu einem oder mehreren besonderen Merkmalen identifiziert
            werden kann, die Ausdruck der physischen, physiologischen,
            genetischen, psychischen, wirtschaftlichen, kulturellen oder
            sozialen Identität dieser natürlichen Person sind.
            Reichweitenmessung: Die Reichweitenmessung (auch als Web Analytics
            bezeichnet) dient der Auswertung der Besucherströme eines
            Onlineangebotes und kann das Verhalten oder Interessen der Besucher
            an bestimmten Informationen, wie z.B. Inhalten von Webseiten,
            umfassen. Mit Hilfe der Reichweitenanalyse können Webseiteninhaber
            z.B. erkennen, zu welcher Zeit Besucher ihre Webseite besuchen und
            für welche Inhalte sie sich interessieren. Dadurch können sie z.B.
            die Inhalte der Webseite besser an die Bedürfnisse ihrer Besucher
            anpassen. Zu Zwecken der Reichweitenanalyse werden häufig pseudonyme
            Cookies und Web-Beacons eingesetzt, um wiederkehrende Besucher zu
            erkennen und so genauere Analysen zur Nutzung eines Onlineangebotes
            zu erhalten. Remarketing: Vom "Remarketing“ bzw. "Retargeting“
            spricht man, wenn z.B. zu Werbezwecken vermerkt wird, für welche
            Produkte sich ein Nutzer auf einer Webseite interessiert hat, um den
            Nutzer auf anderen Webseiten an diese Produkte, z.B. in
            Werbeanzeigen, zu erinnern. Tracking: Vom "Tracking“ spricht man,
            wenn das Verhalten von Nutzern über mehrere Onlineangebote hinweg
            nachvollzogen werden kann. Im Regelfall werden im Hinblick auf die
            genutzten Onlineangebote Verhaltens- und Interessensinformationen in
            Cookies oder auf Servern der Anbieter der Trackingtechnologien
            gespeichert (sogenanntes Profiling). Diese Informationen können
            anschließend z.B. eingesetzt werden, um den Nutzern Werbeanzeigen
            anzuzeigen, die voraussichtlich deren Interessen entsprechen.
            Verantwortlicher: Als "Verantwortlicher“ wird die natürliche oder
            juristische Person, Behörde, Einrichtung oder andere Stelle, die
            allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
            Verarbeitung: "Verarbeitung" ist jeder mit oder ohne Hilfe
            automatisierter Verfahren ausgeführte Vorgang oder jede solche
            Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der
            Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten,
            sei es das Erheben, das Auswerten, das Speichern, das Übermitteln
            oder das Löschen. Erstellt mit kostenlosem Datenschutz-Generator.de
            von Dr. Thomas Schwenke
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
