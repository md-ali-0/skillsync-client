/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
    useDeleteSkillMutation,
    useGetAllSkillsQuery,
} from "@/redux/features/skill/skillApi";
import { ErrorResponse, TMeta } from "@/types";
import { Skill } from "@/types/Skill";
import { SerializedError } from "@reduxjs/toolkit";
import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import DeleteDialog from "../dash/delete-dialog";
import { DataTable } from "../data-table/data-table";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import EditSkillDialog from "./edit-skill";

export default function ManageSkills() {
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const [viewDialogOpen, setViewDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [skillToEdit, setSkillToEdit] = useState<Skill | null>(null);
    const [skillToDelete, setSkillToDelete] = useState<Skill | null>(null);

    const { data, isError, isLoading, isSuccess, error } = useGetAllSkillsQuery(
        [
            {
                name: "limit",
                value: limit,
            },
            {
                name: "page",
                value: page,
            },
            {
                name: "searchTerm",
                value: search,
            },
        ]
    );

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong");
        }
    }, [isError, isSuccess, error]);

    const handleViewClick = (skill: Skill) => {
        setSkillToEdit(skill);
        setViewDialogOpen(true);
    };

    const handleDeleteClick = (skill: Skill) => {
        setSkillToDelete(skill);
        setDeleteDialogOpen(true);
    };

    const columns: ColumnDef<any>[] = [
        {
            accessorKey: "name",
            header: "Skill Name",
            cell: ({ row }) => {
                return <span>{row?.original?.name}</span>;
            },
        },
        {
            accessorKey: "category",
            header: "Skill Category",
            cell: ({ row }) => {
                return <span>{row.original.category}</span>;
            },
        },
        {
            accessorKey: "createdAt",
            header: "Skill Created",
            cell: ({ row }) => {
                return (
                    <div>
                        {new Date(row.original.createdAt).toLocaleDateString(
                            "en-US",
                            {
                                weekday: "short",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }
                        )}
                    </div>
                );
            },
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MoreVertical size={20} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => handleViewClick(row.original)}
                            >
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => handleDeleteClick(row.original)}
                            >
                                Remove
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    const [
        deleteSkill,
        {
            isSuccess: isDeleteSuccess,
            isError: isDeleteError,
            error: deleteError,
        },
    ] = useDeleteSkillMutation();

    useEffect(() => {
        if (isDeleteError) {
            const errorResponse = deleteError as
                | ErrorResponse
                | SerializedError;

            const errorMessage =
                (errorResponse as ErrorResponse)?.data?.message ||
                "Something Went Wrong";

            toast.error(errorMessage);
        } else if (isDeleteSuccess) {
            toast.success("Skill Deleted successfully");
        }
    }, [isDeleteError, isDeleteSuccess, deleteError]);

    const handleDelete = async (id: string) => {
        await deleteSkill(id);
    };

    return (
        <>
            <DataTable
                columns={columns}
                tableHeader={true}
                data={(data?.data as Skill[]) || []}
                isLoading={isLoading}
                onSearchValueChange={setSearch}
                onPageChange={setPage}
                onPageSizeChange={setLimit}
                meta={data?.meta as TMeta}
            />
            <EditSkillDialog
                skill={skillToEdit as Skill}
                open={viewDialogOpen}
                onClose={() => setViewDialogOpen(false)}
            />
            <DeleteDialog
                id={skillToDelete?.id as string}
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                handleDelete={handleDelete}
            />
        </>
    );
}
