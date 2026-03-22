import { Head } from '@inertiajs/react';
import { AlertTriangleIcon } from '@tcn/icons/alert_triangle_icon';
import { EditOneIcon } from '@tcn/icons/edit_one_icon';
import { TrashOneIcon } from '@tcn/icons/trash_one_icon';
import type { ButtonProps } from '@tcn/ui/actions';
import { Button } from '@tcn/ui/actions';
import { Field, FieldSet } from '@tcn/ui/form';
import { Input } from '@tcn/ui/inputs';
import { Divider, TBody, TD, TH, THead, TR, TTable } from '@tcn/ui/layouts';
import { HStack, Spacer, VStack } from '@tcn/ui/stacks';
import { BodyText, Caption } from '@tcn/ui/typography';
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

interface TableDemoRow {
    id: number;
    task: string;
    area: string;
    owner: string;
    status: string;
    due: string;
}

const tableDemoRows: TableDemoRow[] = Array.from(
    { length: 100 },
    (_, index) => ({
        id: index + 1,
        task: `Task ${index + 1}`,
        area: `Area ${index + 1}`,
        owner: `Owner ${index + 1}`,
        status: `Status ${index + 1}`,
        due: `Due ${index + 1}`,
    }),
);

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex min-h-0 flex-1 basis-0 flex-col gap-4 overflow-hidden p-4">
                <div className="grid shrink-0 auto-rows-min gap-4 overflow-x-auto md:grid-cols-3">
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
                {/*
                  Title sits outside the overflow-auto region so it stays visible; only the table
                  scrolls. Remaining height is shared: title shrink-0, scroll area flex-1 min-h-0.
                */}
                <div className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div
                        id="dashboard-sample-tasks-label"
                        className="shrink-0 px-4 pt-4"
                    >
                        <Caption>
                            Sample tasks — TCN{' '}
                            <code className="text-sm">TTable</code> layout
                        </Caption>
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col px-4 pt-2 pb-4">
                        <div className="min-h-0 flex-1 overflow-auto">
                            <TTable
                                aria-labelledby="dashboard-sample-tasks-label"
                                className="table-actions-col-sticky w-full min-w-160 table-fixed overflow-visible"
                            >
                                {/*
                                  Column widths: see `app.css` (.table-actions-col-sticky). Middle
                                  columns must not consume ~80% + fixed Task/Actions or Due’s share
                                  (≈ 20% − 10rem − 5.75rem) goes negative and collapses; `min-w-0`
                                  on Due made that legal. Due stays `w-auto` for slack with a floor.
                                */}
                                <colgroup>
                                    <col className="w-[10rem]" />
                                    <col className="w-[12%]" />
                                    <col className="w-[12%]" />
                                    <col className="w-[10%]" />
                                    <col className="w-auto min-w-[6.5rem]" />
                                    <col className="w-[5.75rem]" />
                                </colgroup>
                                <THead>
                                    <TR>
                                        <TH scope="col">Task</TH>
                                        <TH scope="col">Area</TH>
                                        <TH scope="col">Owner</TH>
                                        <TH scope="col">Status</TH>
                                        <TH scope="col">Due</TH>
                                        <TH scope="col">Actions</TH>
                                    </TR>
                                </THead>
                                <TBody>
                                    {tableDemoRows.map((row) => (
                                        <TR key={row.id}>
                                            <TH scope="row">{row.task}</TH>
                                            <TD>{row.area}</TD>
                                            <TD>{row.owner}</TD>
                                            <TD>{row.status}</TD>
                                            <TD>{row.due}</TD>
                                            <TD>
                                                <HStack
                                                    gap="8px"
                                                    vAlign="center"
                                                >
                                                    <TcnButton
                                                        type="button"
                                                        hierarchy="tertiary"
                                                        severity="neutral"
                                                        size="sm"
                                                        className="shrink-0"
                                                        aria-label={`Edit ${row.task}`}
                                                        onClick={() =>
                                                            console.log(
                                                                'edit task',
                                                                row.id,
                                                                row.task,
                                                            )
                                                        }
                                                    >
                                                        <EditOneIcon size="sm" />
                                                    </TcnButton>
                                                    <TcnButton
                                                        type="button"
                                                        hierarchy="tertiary"
                                                        severity="dangerous"
                                                        size="sm"
                                                        className="shrink-0"
                                                        aria-label={`Delete ${row.task}`}
                                                        onClick={() =>
                                                            console.log(
                                                                'delete task',
                                                                row.id,
                                                                row.task,
                                                            )
                                                        }
                                                    >
                                                        <TrashOneIcon size="sm" />
                                                    </TcnButton>
                                                </HStack>
                                            </TD>
                                        </TR>
                                    ))}
                                </TBody>
                            </TTable>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
