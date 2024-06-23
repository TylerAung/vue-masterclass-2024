import type { UUID } from "crypto"
import { ProjStatus } from "@/enums/status"

export interface IProject {
    id: UUID,
    created_at: String,
    created_by: String,
    slug: String,
    status: ProjStatus,
    updated_by: String,
    creator_id: UUID,
    updated_by_id: UUID,
    title: String
}