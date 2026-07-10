/** Mirrors the Interactions table (UC-07 INSERT target), grouped by leadId for the drawer view. */
export const MOCK_INTERACTIONS = {
  L20260041: [
    { interactionId: 'INT00091', channel: 'Facebook', type: 'Chat AI', date: '2026-07-09T14:20:00+07:00', notes: 'Hỏi về học phí ngành CNTT.' },
    { interactionId: 'INT00072', channel: 'Call', type: 'Call', duration: 8, date: '2026-07-05T10:00:00+07:00', notes: 'Đã gọi giới thiệu chương trình, hẹn gọi lại tuần sau.' },
  ],
  L20260042: [
    { interactionId: 'INT00088', channel: 'Zalo OA', type: 'Chat AI', date: '2026-07-09T11:05:00+07:00', notes: 'Quan tâm học bổng ngành QTKD.' },
  ],
  L20260046: [
    { interactionId: 'INT00095', channel: 'Facebook', type: 'Chat AI', date: '2026-07-09T15:55:00+07:00', notes: 'Vừa để lại thông tin, chưa liên hệ.' },
  ],
}

export const INTERACTION_CHANNELS = ['Call', 'Zalo OA', 'Facebook', 'Email', 'Website']
export const INTERACTION_TYPES = ['Call', 'Chat AI', 'Gặp trực tiếp', 'Email']
