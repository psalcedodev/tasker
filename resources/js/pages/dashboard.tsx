import { Head } from '@inertiajs/react';
import { AlertTriangleIcon } from '@tcn/icons/alert_triangle_icon';
import { Button } from '@tcn/ui/actions';
import type { ButtonProps } from '@tcn/ui/actions';
import { Field, FieldSet } from '@tcn/ui/form';
import { Input } from '@tcn/ui/inputs';
import { Divider } from '@tcn/ui/layouts';
import { HStack, Spacer, VStack } from '@tcn/ui/stacks';
import { BodyText } from '@tcn/ui/typography';
import type {
    ButtonHTMLAttributes,
    ForwardRefExoticComponent,
    PropsWithChildren,
    RefAttributes,
} from 'react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

/** @tcn/ui `Button` + React 19: published forwardRef props omit children / DOM attrs in this project. */
type TcnButtonCompatProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        hierarchy?: ButtonProps['hierarchy'];
        severity?: ButtonProps['severity'];
        /** Present on runtime `BaseButton`; not exposed on published `ButtonProps` here. */
        size?: 'sm' | 'md' | 'lg';
        utility?: boolean;
        color?: string;
    }
>;

const TcnButton = Button as ForwardRefExoticComponent<
    TcnButtonCompatProps & RefAttributes<HTMLButtonElement>
>;

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

const severityOptions: {
    name: string;
    severity: NonNullable<ButtonProps['severity']>;
}[] = [
    { name: 'Dangerous', severity: 'dangerous' },
    { name: 'Cautious', severity: 'cautious' },
    { name: 'Neutral', severity: 'neutral' },
    { name: 'Suggested', severity: 'suggested' },
    { name: 'Encouraged', severity: 'encouraged' },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="absolute inset-0 flex items-center justify-center overflow-auto p-4">
                            <HStack vAlign="center" gap="12px" hAlign="center">
                                <VStack
                                    gap="12px"
                                    vAlign="center"
                                    width="120px"
                                >
                                    {severityOptions.map(
                                        ({ name, severity }) => (
                                            <TcnButton
                                                key={`tertiary-${name}`}
                                                className="w-full"
                                                hierarchy="tertiary"
                                                severity={severity}
                                                type="button"
                                            >
                                                {name}
                                            </TcnButton>
                                        ),
                                    )}
                                </VStack>
                                <VStack
                                    gap="12px"
                                    vAlign="center"
                                    width="120px"
                                >
                                    {severityOptions.map(
                                        ({ name, severity }) => (
                                            <TcnButton
                                                key={`secondary-${name}`}
                                                className="w-full"
                                                hierarchy="secondary"
                                                severity={severity}
                                                type="button"
                                            >
                                                {name}
                                            </TcnButton>
                                        ),
                                    )}
                                </VStack>
                                <VStack
                                    gap="12px"
                                    vAlign="center"
                                    width="120px"
                                >
                                    {severityOptions.map(
                                        ({ name, severity }) => (
                                            <TcnButton
                                                key={`primary-${name}`}
                                                className="w-full"
                                                hierarchy="primary"
                                                severity={severity}
                                                type="button"
                                            >
                                                {name}
                                            </TcnButton>
                                        ),
                                    )}
                                </VStack>
                            </HStack>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="absolute inset-0 overflow-auto p-4">
                            <FieldSet
                                minWidth="200px"
                                maxWidth="600px"
                                padding="8px"
                                gap="8px"
                            >
                                <Field label="Default" id="field-1">
                                    <Input />
                                </Field>
                                <Divider horizontal />
                                <Field
                                    locked
                                    label="Locked"
                                    description="Put helpful information here so the user knows what to do with the input."
                                    id="field-2"
                                >
                                    <Input />
                                </Field>
                                <Divider horizontal />
                                <Field loading label="Loading" id="field-3">
                                    <Input />
                                </Field>
                                <Divider horizontal />
                                <Field
                                    label="Error"
                                    errorMessage="There was a problem with your input."
                                    id="field-4"
                                >
                                    <Input />
                                </Field>
                                <Divider horizontal />
                                <Field
                                    label="Description"
                                    description="Put helpful information here so the user knows what to do with the input."
                                    id="field-5"
                                >
                                    <Input />
                                </Field>
                                <Divider horizontal />
                                <Field
                                    label="Custom Helper Text"
                                    id="field-6"
                                    errorMessage={
                                        <BodyText
                                            size="sm"
                                            color="#e0383e"
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            Permission not met - please contact
                                            your supervisor to set this field.
                                        </BodyText>
                                    }
                                    description={
                                        <HStack vAlign="center">
                                            <AlertTriangleIcon
                                                size="sm"
                                                color="#b8860b"
                                            />
                                            <Spacer width="4px" />
                                            <BodyText size="sm" color="#b8860b">
                                                This setting has been set by
                                                your manager
                                            </BodyText>
                                        </HStack>
                                    }
                                >
                                    <Input />
                                </Field>
                            </FieldSet>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-screen flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
