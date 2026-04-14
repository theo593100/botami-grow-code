import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Botami Software"

interface NewLeadProps {
  firstName?: string
  email?: string
  phone?: string
  company?: string
  budget?: string
  companySize?: string
  sourceRoute?: string
}

const NewLeadNotificationEmail = ({
  firstName, email, phone, company, budget, companySize, sourceRoute,
}: NewLeadProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouveau lead : {firstName || 'Inconnu'} — {company || 'N/A'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>🔔 Nouveau lead reçu</Heading>
        <Text style={text}>Un nouveau prospect a rempli le formulaire sur <strong>{SITE_NAME}</strong>.</Text>
        <Hr style={hr} />
        <Section style={detailSection}>
          <Text style={label}>Prénom</Text>
          <Text style={value}>{firstName || '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          <Text style={label}>Téléphone</Text>
          <Text style={value}>{phone || '—'}</Text>
          <Text style={label}>Entreprise</Text>
          <Text style={value}>{company || '—'}</Text>
          <Text style={label}>Budget logiciel</Text>
          <Text style={value}>{budget || '—'}</Text>
          <Text style={label}>Taille de l'entreprise</Text>
          <Text style={value}>{companySize || '—'}</Text>
          <Text style={label}>Page source</Text>
          <Text style={value}>{sourceRoute || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Cet email a été envoyé automatiquement par {SITE_NAME}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NewLeadNotificationEmail,
  subject: (data: Record<string, any>) => `Nouveau lead : ${data.firstName || 'Inconnu'} — ${data.company || 'N/A'}`,
  displayName: 'Notification nouveau lead',
  previewData: {
    firstName: 'Jean',
    email: 'jean@example.com',
    phone: '06 12 34 56 78',
    company: 'Acme Corp',
    budget: '300€ – 500€/mois',
    companySize: '11 – 50',
    sourceRoute: '/lp/google/logiciel-sur-mesure',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '24px 28px', maxWidth: '520px', margin: '0 auto' }
const h1 = { fontSize: '20px', fontWeight: '700' as const, color: '#1E293B', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const hr = { borderColor: '#E5E7EB', margin: '20px 0' }
const detailSection = { margin: '0' }
const label = { fontSize: '12px', color: '#9CA3AF', margin: '0 0 2px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }
const value = { fontSize: '14px', color: '#1E293B', margin: '0 0 14px', fontWeight: '500' as const }
const footer = { fontSize: '12px', color: '#9CA3AF', margin: '24px 0 0' }
