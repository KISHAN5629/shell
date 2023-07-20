import "@/styles/globals.css";
import { AwsRum } from "aws-rum-web";

try {
  const config = {
    sessionSampleRate: 1,
    guestRoleArn: process.env.NEXT_PUBLIC_GUEST_ROLE_ARN,
    identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
    endpoint: process.env.NEXT_PUBLIC_ENDPOINT,
    telemetries: ["performance", "errors", "http"],
    allowCookies: false,
    enableXRay: false,
    disableAutoPageview: true,
  };

  const APPLICATION_ID = process.env.NEXT_PUBLIC_APPLICATION_ID;
  const APPLICATION_VERSION = process.env.NEXT_PUBLIC_APPLICATION_VERSION;
  const APPLICATION_REGION = process.env.NEXT_PUBLIC_APPLICATION_REGION;

  const awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
