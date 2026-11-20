import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name and Phone are required' },
        { status: 400 }
      );
    }

    console.log('--- NEW DIGITACURVE INQUIRY ---', {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      service,
      message,
    });

    // Forward to FormSubmit webhook asynchronously
    try {
      await fetch('https://formsubmit.co/ajax/digitacurve@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          message,
          _subject: `New Digitacurve Lead: ${name} (${service})`,
        }),
      });
    } catch (e) {
      console.warn('FormSubmit forwarding note:', e);
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully! Rishabh Jaiswal will reach out shortly.',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: 'Server error processing inquiry' },
      { status: 500 }
    );
  }
}
