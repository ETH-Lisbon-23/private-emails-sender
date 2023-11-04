import { IExecWeb3mail, getWeb3Provider } from "@iexec/web3mail"
import dotenv from "dotenv"
dotenv.config();

const { PRIVATE_KEY } = process.env
const { PROTECTED_DATA } = process.env

// get web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY)
// instantiate
const web3mail = new IExecWeb3mail(web3Provider)

const sendMail = async (message) => {
	const protectedData = PROTECTED_DATA
	const emailSubject = 'You have received an message from a potential acquirer - M&A Tools'
	const emailContent = message

	const result = await web3mail.sendEmail({
		protectedData,
		emailSubject,
		emailContent
	})

	console.log(result)
}

sendMail("Hello, I am interested in your project. Please contact me")