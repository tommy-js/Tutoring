import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-189510484-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-189510484-1', {
            page_path: window.location.pathname,
          });
          `,
            }}
          />
          {/* Facebook Pixel Code */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
                 !function(f,b,e,v,n,t,s)
                 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                 n.queue=[];t=b.createElement(e);t.async=!0;
                 t.src=v;s=b.getElementsByTagName(e)[0];
                 s.parentNode.insertBefore(t,s)}(window, document,'script',
                 'https://connect.facebook.net/en_US/fbevents.js');
                 fbq('init', 830094737898274);
               `,
            }}
          />

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=830094737898274&ev=PageView&noscript=1`}
            />
          </noscript>

          {/* End Facebook Pixel Code */}

          {/* MailChimp integration */}

          <script
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p)
                        {
                          ((m = c.createElement(h)),
                          (p = c.getElementsByTagName(h)[0]),
                          (m.async = 1),
                          (m.src = i),
                          p.parentNode.insertBefore(m, p))
                        }
                        (document,"script","https://chimpstatic.com/mcjs-connected/js/users/7849af733b1b543ebd1755511/31febf5a3c30ed0a1bf3f01da.js");`,
            }}
          />
          {/* End MailChimp integration*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
