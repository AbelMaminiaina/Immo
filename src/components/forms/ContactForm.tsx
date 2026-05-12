import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { useContactLead } from '@/hooks/useProperties'
import type { ContactLead } from '@/api/types'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prenom doit contenir au moins 2 caracteres'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caracteres'),
  email: z.string().email('Email invalide'),
  phone: z
    .string()
    .regex(/^(?:\+261|0)[32][0-9]{7}$/, 'Numero de telephone invalide (ex: +261 34 12 345 67)'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  propertyId?: string
  propertyTitle?: string
  onSuccess?: () => void
}

export const ContactForm = ({
  propertyId,
  propertyTitle,
  onSuccess,
}: ContactFormProps) => {
  const { mutate, isPending, isSuccess, isError, error } = useContactLead()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: propertyTitle
        ? `Bonjour, je suis interesse(e) par le bien "${propertyTitle}". Merci de me recontacter.`
        : '',
    },
  })

  const onSubmit = (data: ContactFormData) => {
    const lead: ContactLead = {
      ...data,
      propertyId,
    }

    mutate(lead, {
      onSuccess: () => {
        reset()
        onSuccess?.()
      },
    })
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
          Message envoye !
        </h3>
        <p className="text-green-700 dark:text-green-400">
          Nous avons bien recu votre demande et vous recontacterons rapidement.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {isError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-400">
          Une erreur est survenue. Veuillez reessayer.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-theme-primary mb-1"
          >
            Prenom *
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className="input-field"
            placeholder="Rakoto"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-theme-primary mb-1"
          >
            Nom *
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className="input-field"
            placeholder="Andrianjafy"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-theme-primary mb-1"
        >
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="input-field"
          placeholder="rakoto@gmail.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-theme-primary mb-1"
        >
          Telephone *
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="input-field"
          placeholder="+261 34 12 345 67"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-theme-primary mb-1"
        >
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="input-field resize-none"
          placeholder="Votre message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" isLoading={isPending} className="w-full">
        Envoyer ma demande
      </Button>

      <p className="text-xs text-theme-muted text-center">
        En soumettant ce formulaire, vous acceptez d'etre contacte par notre agence.
      </p>
    </form>
  )
}
