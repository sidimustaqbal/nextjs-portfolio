import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  // Here you would typically use an email sending service
  // For example, using NodeMailer or a service like SendGrid
  console.log('Sending email:', { name, email, subject, message })

  // Simulate email sending
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json({ success: true })
}