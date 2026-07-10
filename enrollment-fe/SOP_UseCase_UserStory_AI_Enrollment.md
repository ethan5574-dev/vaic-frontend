**SOP: USE CASE & USER STORY**

Framework, Model & Quy trình chuẩn áp dụng cho dự án

**AI Enrollment Intelligence Platform**

*AI-Native Multi-Agent Platform for Smart Student Recruitment &
Enrollment*

Phiên bản 1.0 \| Tháng 7/2026

# 1. Giới thiệu & Bối cảnh áp dụng

Tài liệu này là SOP (Standard Operating Procedure) hướng dẫn cách xây
dựng và quản lý Use Case và User Story, áp dụng trực tiếp vào dự án "AI
Enrollment Intelligence Platform" --- nền tảng AI Native Multi-Agent hỗ
trợ tuyển sinh thông minh cho một trường đại học 25.000 sinh viên tại
TP.HCM.

Dự án gồm 3 module nghiệp vụ (Admission Portal, Advisor Dashboard,
Executive Dashboard) và 6 bài toán AI (Lead Scoring, Next Best Action,
Student Churn Prediction, Enrollment Forecasting, Virtual Admission
Consultant, Advisor Performance Analytics), vận hành trên dữ liệu Leads,
Interactions, Offers và AcademicProfile. Đây là bối cảnh dùng xuyên suốt
tài liệu để minh họa Use Case và User Story.

+-----------------------------------------------------------------------+
| Mục tiêu tài liệu:                                                    |
|                                                                       |
| 1\) Thống nhất khái niệm và tránh nhầm lẫn Use Case ↔ User Story.     |
|                                                                       |
| 2\) Cung cấp framework/template chuẩn để viết đúng ngay từ đầu.       |
|                                                                       |
| 3\) Đưa ra SOP từng bước và ví dụ áp dụng thực tế cho dự án.          |
+-----------------------------------------------------------------------+

# 2. Khái niệm: Use Case là gì? User Story là gì?

## 2.1. Use Case

Use Case mô tả một tương tác hoàn chỉnh giữa một Actor (người dùng hoặc
hệ thống bên ngoài) và hệ thống để đạt được một mục tiêu nghiệp vụ cụ
thể. Use Case xuất phát từ phương pháp UML/BA truyền thống, tập trung
vào toàn bộ luồng hành vi (main flow, alternate flow, exception flow)
chứ không chỉ một câu nói ngắn.

-   **Actor:** người/hệ thống khởi tạo hoặc tham gia tương tác (VD: Học
    sinh, Tư vấn viên, Ban Giám đốc, AI Lead Scoring Engine).

-   **Goal:** mục tiêu nghiệp vụ mà Actor muốn đạt được (VD: nhận tư vấn
    ngành học phù hợp).

-   **Scope:** ranh giới hệ thống --- Use Case mô tả "bên trong" hệ
    thống làm gì để phục vụ Actor.

-   **Flow:** chuỗi bước tương tác: Main Success Scenario, Alternate
    Flow, Exception Flow.

## 2.2. User Story

User Story là một đơn vị công việc nhỏ, viết dưới góc nhìn người dùng,
dùng trong Agile/Scrum để mô tả một nhu cầu cụ thể cần được phát triển
trong 1 sprint. User Story không đi sâu vào luồng xử lý chi tiết mà tập
trung vào giá trị mang lại (value) và được làm rõ dần qua Acceptance
Criteria và các cuộc trao đổi ("card, conversation, confirmation").

-   **Card:** câu chuyện ngắn gọn theo mẫu "As a ... I want ... So that
    ...".

-   **Conversation:** chi tiết được làm rõ qua trao đổi giữa PO, BA,
    Dev, QA.

-   **Confirmation:** Acceptance Criteria xác nhận User Story đã hoàn
    thành đúng kỳ vọng.

## 2.3. So sánh Use Case và User Story

  ------------------------------------------------------------------------
  **Tiêu chí**     **Use Case**                **User Story**
  ---------------- --------------------------- ---------------------------
  Nguồn gốc        UML / phân tích nghiệp vụ   Agile / Scrum / XP
                   truyền thống (Waterfall,    
                   RUP)                        

  Mức độ chi tiết  Chi tiết, đầy đủ luồng      Ngắn gọn, chỉ nêu nhu cầu;
                   chính & luồng phụ, ngoại lệ chi tiết bổ sung qua
                                               Acceptance Criteria

  Góc nhìn         Góc nhìn hệ thống -- Actor  Góc nhìn người dùng -- giá
                   tương tác với hệ thống      trị người dùng nhận được

  Kích thước       Thường lớn, có thể chứa     Nhỏ, hoàn thành trong 1
                   nhiều User Story bên trong  sprint (thường 1--5 ngày
                                               công)

  Khi nào dùng     Giai đoạn phân tích yêu cầu Giai đoạn lập backlog,
                   tổng thể, thiết kế hệ       sprint planning, phát triển
                   thống, tài liệu hợp         lặp
                   đồng/đấu thầu               

  Ví dụ (dự án     UC-05: Xem danh sách Lead   US-2.1: Là Tư vấn viên, tôi
  này)             cần xử lý (đầy đủ luồng     muốn thấy Lead được xếp
                   chính/phụ)                  hạng Hot/Warm/Cold để ưu
                                               tiên liên hệ trước
  ------------------------------------------------------------------------

Trong thực tế, hai công cụ này bổ trợ nhau: Use Case giúp nhìn toàn cảnh
hệ thống và ràng buộc nghiệp vụ; User Story giúp chia nhỏ Use Case thành
các hạng mục có thể phát triển và release độc lập theo sprint. SOP ở Mục
5 sẽ hướng dẫn cách đi từ Use Case ra User Story một cách nhất quán, có
truy vết (traceability).

# 3. Framework/Model viết Use Case

## 3.1. Xác định Actor

Trước khi viết Use Case, liệt kê đầy đủ Actor gồm Primary Actor (khởi
tạo tương tác) và Secondary/Supporting Actor (hệ thống hoặc bên hỗ trợ).
Xem chi tiết Actor của dự án tại Mục 6.1.

## 3.2. Template chuẩn (UML Use Case Specification)

  -----------------------------------------------------------------------
  **Trường thông tin**     **Nội dung cần điền**
  ------------------------ ----------------------------------------------
  Use Case ID & Name       Mã định danh (VD: UC-05) và tên hành động ở
                           dạng động từ + danh từ

  Actor                    Primary Actor và Secondary Actor liên quan

  Mô tả ngắn (Brief        1--2 câu tóm tắt mục tiêu Use Case
  Description)             

  Trigger                  Sự kiện khởi phát Use Case

  Precondition             Điều kiện phải đúng trước khi Use Case bắt đầu

  Main Success Scenario    Chuỗi bước đánh số mô tả luồng chính, kết thúc
                           thành công

  Alternate Flow           Các nhánh rẽ hợp lệ khác luồng chính (VD: Lead
                           từ chối offer)

  Exception Flow           Các tình huống lỗi/ngoại lệ và cách hệ thống
                           xử lý

  Postcondition            Trạng thái hệ thống sau khi Use Case kết thúc
                           thành công

  Business Rules           Quy tắc nghiệp vụ ràng buộc Use Case (VD:
                           ngưỡng điểm Lead Scoring)

  Include / Extend         Liên kết tới Use Case khác được include (bắt
                           buộc gọi) hoặc extend (tùy điều kiện)

  Non-functional / KPI     Yêu cầu hiệu năng, bảo mật, hoặc KPI đo lường
  liên quan                (VD: Response Time \<10 phút)
  -----------------------------------------------------------------------

## 3.3. Nguyên tắc viết tốt

-   Tên Use Case dùng động từ chủ động: "Chấm điểm Lead", không viết
    "Lead Scoring Module".

-   Một Use Case = một mục tiêu hoàn chỉnh của Actor, không gộp nhiều
    mục tiêu không liên quan.

-   Dùng \<\<include\>\> khi hành vi con luôn được gọi (VD: UC-05
    include UC-14 Lead Scoring); dùng \<\<extend\>\> khi hành vi con chỉ
    xảy ra có điều kiện (VD: UC-11 extend cảnh báo rủi ro nếu forecast
    \< target).

-   Viết Postcondition đo lường được, tránh mô tả mơ hồ.

# 4. Framework/Model viết User Story

## 4.1. Cấu trúc chuẩn

+-----------------------------------------------------------------------+
| As a \<vai trò/Actor\>                                                |
|                                                                       |
| I want \<hành động/nhu cầu\>                                          |
|                                                                       |
| So that \<giá trị/lý do nghiệp vụ\>                                   |
+-----------------------------------------------------------------------+

## 4.2. Bộ tiêu chí INVEST

  ------------------------------------------------------------------------
  **Tiêu chí**  **Ý nghĩa**                 **Áp dụng cho dự án**
  ------------- --------------------------- ------------------------------
  Independent   Độc lập, ít phụ thuộc story US Lead Scoring tách khỏi US
                khác                        Chatbot để dev song song

  Negotiable    Có thể trao đổi chi tiết,   PO/BA có thể điều chỉnh ngưỡng
                không cứng nhắc như hợp     Hot/Warm/Cold khi review
                đồng                        

  Valuable      Mang lại giá trị rõ ràng    Story phải gắn với KPI
                cho người dùng/doanh nghiệp (Conversion Rate, CAC\...)

  Estimable     Đội dev ước lượng được      Story đủ rõ để estimate story
                effort                      points

  Small         Đủ nhỏ để hoàn thành trong  Tách "Xem Executive Dashboard"
                1 sprint                    thành nhiều story nhỏ theo
                                            từng widget

  Testable      Có Acceptance Criteria kiểm Viết theo Gherkin
                tra được                    Given-When-Then
  ------------------------------------------------------------------------

## 4.3. Acceptance Criteria -- mẫu Gherkin

+-----------------------------------------------------------------------+
| Given \<bối cảnh/điều kiện ban đầu\>                                  |
|                                                                       |
| When \<hành động người dùng thực hiện\>                               |
|                                                                       |
| Then \<kết quả hệ thống phải trả về\>                                 |
+-----------------------------------------------------------------------+

## 4.4. Kích thước & Ước lượng

Sử dụng thang Fibonacci (1, 2, 3, 5, 8, 13) hoặc T-shirt size (S/M/L/XL)
để ước lượng story point trong Planning Poker. Story trên 8 điểm nên
được tách nhỏ (splitting) trước khi đưa vào sprint.

# 5. SOP -- Quy trình chuẩn 7 bước

Quy trình dưới đây áp dụng cho mọi module của dự án, từ Discovery đến
khi đưa vào Sprint.

  ----------------------------------------------------------------------------
  **Bước**       **Hoạt động**             **Đầu ra**          **Người phụ
                                                               trách**
  -------------- ------------------------- ------------------- ---------------
  1\. Discovery  Workshop với Ban Giám     Business Context    BA + PO
                 đốc/Phòng Tuyển sinh để   Canvas, danh sách   
                 hiểu Business Problem,    vấn đề              
                 KPI mục tiêu (Mục 2 đề                        
                 bài)                                          

  2\. Xác định   Liệt kê Actor (người      Actor List, Goal    BA
  Actor & Goal   dùng + hệ thống AI + hệ   List (Mục 6.1)      
                 thống ngoài), xác định                        
                 Goal của từng Actor                           

  3\. Vẽ Use     Nhóm Goal thành Use Case, Use Case Diagram +  BA + Tech Lead
  Case Diagram & xác định include/extend,  Use Case            
  viết Use Case  viết chi tiết theo        Specification       
  Spec           template Mục 3.2                              

  4\. Chuyển Use Tách mỗi Use Case (hoặc   Product Backlog     PO + BA
  Case → User    từng bước lớn) thành 1--n (User Story list,   
  Story          User Story theo INVEST,   Mục 7)              
                 gắn Epic                                      

  5\. Viết       Viết Gherkin              Acceptance Criteria PO + QA
  Acceptance     Given-When-Then cho từng  đính kèm mỗi story  
  Criteria       User Story, thống nhất                        
                 với QA                                        

  6\. Review &   Backlog grooming: review  Backlog đã ước      Cả team (Scrum)
  Refinement     với Dev/QA, chấm INVEST,  lượng, sẵn sàng vào 
                 ước lượng story points,   sprint              
                 xác nhận Definition of                        
                 Ready (DoR)                                   

  7\.            Cập nhật Traceability     Traceability Matrix BA
  Traceability & Matrix (Use Case ↔ User   (Mục 9)             
  Maintenance    Story ↔ AI Task/Feature),                     
                 review khi có thay đổi                        
                 yêu cầu                                       
  ----------------------------------------------------------------------------

## 5.1. Definition of Ready (DoR)

-   User Story tuân thủ format As a/I want/So that, có Acceptance
    Criteria.

-   Đã xác định phụ thuộc dữ liệu (VD: cần trường SentimentScore trong
    bảng Interactions cho Next Best Action).

-   Đã ước lượng story point, không vượt quá năng lực 1 sprint.

-   Liên kết rõ với Use Case gốc và KPI kinh doanh.

## 5.2. Definition of Done (DoD)

-   Tất cả Acceptance Criteria pass (kiểm thử thủ công hoặc tự động).

-   Đối với story liên quan AI (Lead Scoring, Chatbot\...): đạt ngưỡng
    chất lượng model/RAG đã thống nhất (VD: Accuracy, Hallucination
    Score theo Mục 9 đề bài).

-   Code review, demo cho PO, cập nhật tài liệu API/README.

# 6. Áp dụng vào dự án AI Enrollment Intelligence Platform

## 6.1. Danh sách Actor

  ------------------------------------------------------------------------
  **Actor**                **Loại**      **Mô tả / Goal chính**
  ------------------------ ------------- ---------------------------------
  Học sinh / Phụ huynh     Primary (con  Tìm hiểu ngành học, nhận tư vấn
  (Prospective Student)    người)        24/7, đăng ký hồ sơ, theo dõi &
                                         phản hồi Offer

  Tư vấn viên (Admission   Primary (con  Xử lý Lead theo độ ưu tiên, nhận
  Advisor)                 người)        gợi ý hành động, theo dõi hiệu
                                         suất cá nhân

  Ban Giám đốc / Trưởng    Primary (con  Theo dõi KPI, phễu tuyển sinh, dự
  phòng Tuyển sinh         người)        báo doanh thu, ra quyết định phân
  (Executive)                            bổ ngân sách

  AI Virtual Admission     Supporting    Trả lời câu hỏi học sinh/phụ
  Consultant               (hệ thống --  huynh bằng RAG + LLM, cá nhân hóa
                           Agent)        tư vấn

  Lead Scoring Engine      Supporting    Chấm điểm 0--100 và phân hạng
                           (hệ thống --  Hot/Warm/Cold cho từng Lead
                           AI Model)     

  Forecasting & Churn      Supporting    Dự báo enrollment/doanh thu; dự
  Engine                   (hệ thống --  đoán rủi ro bỏ học sinh viên
                           AI Model)     

  Hệ thống ngoài (CRM      Secondary     Nguồn dữ liệu Lead/Interaction
  Salesforce, Zalo OA,     (external     cần hợp nhất qua tầng tích hợp dữ
  Facebook, Email, Call    system)       liệu
  Center, Website                        
  Analytics)                             
  ------------------------------------------------------------------------

## 6.2. Sơ đồ nhóm Use Case theo Module

-   Module 1 -- Admission Portal (Actor chính: Học sinh/Phụ huynh)

-   Module 2 -- Advisor Dashboard (Actor chính: Tư vấn viên)

-   Module 3 -- Executive Dashboard (Actor chính: Ban Giám đốc)

-   Nền tảng AI dùng chung (Actor: Lead Scoring Engine, Forecasting &
    Churn Engine, AI Virtual Consultant) -- được include/extend bởi Use
    Case của 3 module trên

# 7. Danh sách Use Case của dự án

  -----------------------------------------------------------------------------------
  **ID**   **Tên Use Case**         **Actor       **Module**     **Include/Extend**
                                    chính**                      
  -------- ------------------------ ------------- -------------- --------------------
  UC-01    Đăng ký thông tin / gửi  Học sinh/Phụ  Admission      --
           yêu cầu tư vấn (Submit   huynh         Portal         
           Lead Form)                                            

  UC-02    Chat với AI Virtual      Học sinh/Phụ  Admission      Include: RAG
           Consultant               huynh         Portal         Knowledge Retrieval

  UC-03    Xem trạng thái hồ sơ     Học sinh/Phụ  Admission      --
           (Track Application       huynh         Portal         
           Status)                                               

  UC-04    Chấp nhận / từ chối      Học sinh/Phụ  Admission      Extend: Đề xuất học
           Offer nhập học           huynh         Portal         bổng bổ sung

  UC-05    Xem danh sách Lead ưu    Tư vấn viên   Advisor        Include: UC-14 Lead
           tiên xử lý                             Dashboard      Scoring

  UC-06    Nhận gợi ý hành động     Tư vấn viên   Advisor        Include: UC-05
           tiếp theo (Next Best                   Dashboard      
           Action)                                               

  UC-07    Ghi nhận tương tác với   Tư vấn viên   Advisor        --
           Lead (Log Interaction)                 Dashboard      

  UC-08    Theo dõi hiệu suất cá    Tư vấn viên   Advisor        --
           nhân (Performance                      Dashboard      
           Tracking)                                             

  UC-09    Xem KPI tổng quan tuyển  Ban Giám đốc  Executive      --
           sinh (Executive KPI                    Dashboard      
           Overview)                                             

  UC-10    Xem phễu tuyển sinh &    Ban Giám đốc  Executive      --
           phân tích drop-off                     Dashboard      

  UC-11    Xem dự báo doanh thu &   Ban Giám đốc  Executive      Include: UC-15
           nhập học (Forecasting)                 Dashboard      

  UC-12    Xem cảnh báo & khuyến    Ban Giám đốc  Executive      Include: UC-15 Churn
           nghị AI (AI Insights)                  Dashboard      Prediction

  UC-13    Drill-down chi tiết &    Ban Giám đốc  Executive      Extend của
           Export báo cáo                         Dashboard      UC-09/10/11

  UC-14    Chấm điểm & phân loại    Lead Scoring  AI Platform    Được include bởi
           Lead (Lead Scoring &     Engine        (dùng chung)   UC-05, UC-06
           Classification)                                       

  UC-15    Dự đoán rủi ro bỏ học /  Forecasting & AI Platform    Được include bởi
           dự báo Enrollment (Churn Churn Engine  (dùng chung)   UC-11, UC-12
           & Forecasting)                                        
  -----------------------------------------------------------------------------------

# 8. Ví dụ chi tiết Use Case (đầy đủ template)

## 8.1. UC-05 -- Xem danh sách Lead ưu tiên xử lý

+---------------+------------------------------------------------------+
| **Trường**    | **Nội dung**                                         |
+===============+======================================================+
| Actor         | Primary: Tư vấn viên \| Supporting: Lead Scoring     |
|               | Engine (UC-14)                                       |
+---------------+------------------------------------------------------+
| Mô tả ngắn    | Tư vấn viên xem danh sách Lead được AI chấm điểm và  |
|               | xếp hạng Hot/Warm/Cold để ưu tiên liên hệ            |
+---------------+------------------------------------------------------+
| Trigger       | Tư vấn viên đăng nhập Advisor Dashboard              |
+---------------+------------------------------------------------------+
| Precondition  | Tư vấn viên đã được cấp tài khoản; Lead Scoring      |
|               | Engine đã chạy batch/real-time scoring cho các Lead  |
|               | mới                                                  |
+---------------+------------------------------------------------------+
| Main Success  | 1\. Tư vấn viên đăng nhập Advisor Dashboard.         |
| Scenario      |                                                      |
|               | 2\. Hệ thống gọi UC-14 để lấy Score và hạng          |
|               | Hot/Warm/Cold mới nhất cho các Lead thuộc phụ trách. |
|               |                                                      |
|               | 3\. Hệ thống hiển thị danh sách Lead sắp xếp theo    |
|               | Score giảm dần, kèm badge màu theo hạng.             |
|               |                                                      |
|               | 4\. Tư vấn viên chọn 1 Lead để xem chi tiết hồ sơ và |
|               | lịch sử tương tác.                                   |
|               |                                                      |
|               | 5\. Hệ thống ghi nhận thời điểm Lead được xem (dùng  |
|               | để tính Response Time).                              |
+---------------+------------------------------------------------------+
| Alternate     | 3a. Nếu Tư vấn viên lọc theo kênh tiếp cận           |
| Flow          | (Facebook/Zalo/Email) hoặc theo Chương trình quan    |
|               | tâm, hệ thống áp filter và hiển thị lại danh sách.   |
+---------------+------------------------------------------------------+
| Exception     | 2a. Nếu Lead Scoring Engine không phản hồi           |
| Flow          | (timeout), hệ thống hiển thị Score cũ nhất đã lưu    |
|               | kèm cảnh báo "Dữ liệu chưa cập nhật".                |
+---------------+------------------------------------------------------+
| Postcondition | Tư vấn viên nắm được thứ tự ưu tiên xử lý Lead; thời |
|               | điểm xem Lead được ghi log phục vụ đo Response Time  |
|               | to Lead                                              |
+---------------+------------------------------------------------------+
| Business      | Hot ≥ 70 điểm, Warm 40--69, Cold \< 40 (ngưỡng có    |
| Rules         | thể tinh chỉnh theo mô hình XGBoost)                 |
+---------------+------------------------------------------------------+
| KPI liên quan | Response Time to Lead (mục tiêu \<10 phút), Lead     |
|               | Conversion Rate (mục tiêu 30%)                       |
+---------------+------------------------------------------------------+

## 8.2. UC-02 -- Chat với AI Virtual Consultant

+---------------+------------------------------------------------------+
| **Trường**    | **Nội dung**                                         |
+===============+======================================================+
| Actor         | Primary: Học sinh/Phụ huynh \| Supporting: AI        |
|               | Virtual Consultant (RAG + LLM)                       |
+---------------+------------------------------------------------------+
| Mô tả ngắn    | Học sinh/phụ huynh đặt câu hỏi về ngành học, học     |
|               | phí, học bổng và nhận tư vấn tự động 24/7            |
+---------------+------------------------------------------------------+
| Trigger       | Người dùng mở cửa sổ chat trên Web/Zalo/Facebook     |
+---------------+------------------------------------------------------+
| Precondition  | Knowledge Base (thông tin ngành học, học phí, học    |
|               | bổng) đã được index vào Vector DB (Qdrant/Milvus)    |
+---------------+------------------------------------------------------+
| Main Success  | 1\. Người dùng nhập câu hỏi.                         |
| Scenario      |                                                      |
|               | 2\. Hệ thống truy xuất ngữ cảnh liên quan từ         |
|               | Knowledge Base (RAG retrieval).                      |
|               |                                                      |
|               | 3\. LLM sinh câu trả lời cá nhân hóa dựa trên hồ sơ  |
|               | Lead (GPA, ProgramInterest, TuitionBudget).          |
|               |                                                      |
|               | 4\. Hệ thống trả lời và gợi ý ngành học phù hợp.     |
|               |                                                      |
|               | 5\. Hệ thống lưu lại tương tác vào bảng Interactions |
|               | (Channel, SentimentScore, Timestamp).                |
+---------------+------------------------------------------------------+
| Alternate     | 4a. Nếu câu hỏi vượt phạm vi (VD: khiếu nại học      |
| Flow          | phí), hệ thống chuyển tiếp (handoff) cho Tư vấn viên |
|               | và tạo FollowupDate.                                 |
+---------------+------------------------------------------------------+
| Exception     | 2a. Nếu không tìm thấy ngữ cảnh phù hợp (retrieval   |
| Flow          | rỗng), hệ thống trả lời an toàn ("xin phép chuyển    |
|               | câu hỏi này đến tư vấn viên") để tránh               |
|               | hallucination.                                       |
+---------------+------------------------------------------------------+
| Postcondition | Câu hỏi được trả lời hoặc chuyển tiếp; Interaction   |
|               | mới được ghi nhận để phục vụ Next Best Action        |
|               | (UC-06)                                              |
+---------------+------------------------------------------------------+
| Business      | Không trả lời thông tin học phí/học bổng chưa được   |
| Rules         | xác nhận trong Knowledge Base                        |
+---------------+------------------------------------------------------+
| KPI liên quan | Hallucination Score, RAG Precision/Recall, Latency   |
|               | \<500ms (theo tiêu chí AI Benchmark)                 |
+---------------+------------------------------------------------------+

## 8.3. UC-12 -- Xem cảnh báo & khuyến nghị AI (Executive)

+---------------+------------------------------------------------------+
| **Trường**    | **Nội dung**                                         |
+===============+======================================================+
| Actor         | Primary: Ban Giám đốc \| Supporting: Forecasting &   |
|               | Churn Engine (UC-15)                                 |
+---------------+------------------------------------------------------+
| Mô tả ngắn    | Ban Giám đốc xem các cảnh báo rủi ro (dropout, không |
|               | đạt chỉ tiêu) và khuyến nghị hành động do AI đề xuất |
+---------------+------------------------------------------------------+
| Trigger       | Ban Giám đốc mở tab "AI Insights & Recommendations"  |
|               | trên Executive Dashboard                             |
+---------------+------------------------------------------------------+
| Precondition  | Churn Prediction model đã chạy trên dữ liệu          |
|               | AcademicProfile mới nhất; Enrollment Forecasting đã  |
|               | cập nhật                                             |
+---------------+------------------------------------------------------+
| Main Success  | 1\. Ban Giám đốc mở Executive Dashboard.             |
| Scenario      |                                                      |
|               | 2\. Hệ thống gọi UC-15 để lấy Risk Score theo chương |
|               | trình/khu vực và độ lệch forecast so với target.     |
|               |                                                      |
|               | 3\. Hệ thống hiển thị danh sách insight dạng thẻ     |
|               | (VD: "Khoa Kỹ thuật XD dropout 15%", "Tăng ngân sách |
|               | Marketing Hà Nội").                                  |
|               |                                                      |
|               | 4\. Ban Giám đốc click vào 1 insight để xem giải     |
|               | thích (SHAP feature importance).                     |
|               |                                                      |
|               | 5\. Ban Giám đốc đánh dấu insight đã xử lý hoặc giao |
|               | việc cho phòng ban liên quan.                        |
+---------------+------------------------------------------------------+
| Alternate     | 3a. Ban Giám đốc lọc insight theo mức độ ưu tiên     |
| Flow          | (Critical/Warning/Info).                             |
+---------------+------------------------------------------------------+
| Exception     | 2a. Nếu model chưa chạy trong 24h gần nhất, hệ thống |
| Flow          | hiển thị nhãn "Dữ liệu insight có thể chưa mới       |
|               | nhất".                                               |
+---------------+------------------------------------------------------+
| Postcondition | Ban Giám đốc có cơ sở ra quyết định phân bổ ngân     |
|               | sách/nguồn lực; insight đã xử lý được lưu vết        |
+---------------+------------------------------------------------------+
| Business      | Insight được xếp Critical nếu Risk Score \> 70% hoặc |
| Rules         | forecast lệch \> 15% so với target                   |
+---------------+------------------------------------------------------+
| KPI liên quan | Forecast Accuracy, Dropout Rate (mục tiêu giảm 12% → |
|               | 8%)                                                  |
+---------------+------------------------------------------------------+

# 9. User Story Backlog theo Epic

## 9.1. EPIC-1: Admission Portal

  --------------------------------------------------------------------------------
  **ID**   **User Story**                        **Ưu     **Điểm**   **UC liên
                                                 tiên**              quan**
  -------- ------------------------------------- -------- ---------- -------------
  US-1.1   Là học sinh, tôi muốn điền form đăng  Must     3          UC-01
           ký tư vấn trên Web/Zalo/Facebook để                       
           được liên hệ tư vấn nhanh                                 

  US-1.2   Là phụ huynh, tôi muốn chat với AI    Must     8          UC-02
           Consultant để hỏi về học phí và học                       
           bổng bất kỳ lúc nào                                       

  US-1.3   Là học sinh, tôi muốn xem trạng thái  Should   5          UC-03
           hồ sơ của mình (đã nộp/phỏng                              
           vấn/offer) để yên tâm theo dõi                            

  US-1.4   Là học sinh, tôi muốn nhận và phản    Must     5          UC-04
           hồi (chấp nhận/từ chối) Offer nhập                        
           học ngay trên portal                                      

  US-1.5   Là phụ huynh, tôi muốn nhận gợi ý     Could    5          UC-02
           ngành học phù hợp dựa trên GPA và sở                      
           thích của con                                             
  --------------------------------------------------------------------------------

## 9.2. EPIC-2: Advisor Dashboard

  --------------------------------------------------------------------------------
  **ID**   **User Story**                        **Ưu     **Điểm**   **UC liên
                                                 tiên**              quan**
  -------- ------------------------------------- -------- ---------- -------------
  US-2.1   Là tư vấn viên, tôi muốn thấy danh    Must     8          UC-05, UC-14
           sách Lead xếp hạng Hot/Warm/Cold để                       
           ưu tiên liên hệ trước                                     

  US-2.2   Là tư vấn viên, tôi muốn nhận gợi ý   Must     8          UC-06
           kênh và thời điểm liên hệ tối ưu cho                      
           từng Lead                                                 

  US-2.3   Là tư vấn viên, tôi muốn ghi nhận     Must     3          UC-07
           nhanh nội dung cuộc gọi/chat vào hệ                       
           thống sau mỗi tương tác                                   

  US-2.4   Là tư vấn viên, tôi muốn xem bảng xếp Should   5          UC-08
           hạng hiệu suất cá nhân so với đồng                        
           nghiệp để cải thiện                                       
  --------------------------------------------------------------------------------

## 9.3. EPIC-3: Executive Dashboard

  --------------------------------------------------------------------------------
  **ID**   **User Story**                        **Ưu     **Điểm**   **UC liên
                                                 tiên**              quan**
  -------- ------------------------------------- -------- ---------- -------------
  US-3.1   Là Ban Giám đốc, tôi muốn xem KPI     Must     5          UC-09
           Conversion Rate, Revenue, CAC theo                        
           thời gian thực                                            

  US-3.2   Là Ban Giám đốc, tôi muốn xem phễu    Must     5          UC-10
           tuyển sinh 5 bước để biết điểm rớt                        
           (drop-off) lớn nhất                                       

  US-3.3   Là Ban Giám đốc, tôi muốn xem dự báo  Must     8          UC-11, UC-15
           doanh thu & nhập học 12 tháng kèm                         
           khoảng tin cậy                                            

  US-3.4   Là Ban Giám đốc, tôi muốn nhận cảnh   Must     8          UC-12, UC-15
           báo và khuyến nghị AI để ra quyết                         
           định ngân sách kịp thời                                   

  US-3.5   Là Ban Giám đốc, tôi muốn drill-down  Should   5          UC-13
           vào từng KPI và export báo cáo                            
           PDF/Excel                                                 
  --------------------------------------------------------------------------------

## 9.4. EPIC-4: AI Platform (dùng chung)

  --------------------------------------------------------------------------------
  **ID**   **User Story**                        **Ưu     **Điểm**   **UC liên
                                                 tiên**              quan**
  -------- ------------------------------------- -------- ---------- -------------
  US-4.1   Là hệ thống, tôi cần chấm điểm Lead   Must     13         UC-14
           0--100 theo thời gian gần thực để                         
           phục vụ Advisor Dashboard                                 

  US-4.2   Là hệ thống, tôi cần dự đoán rủi ro   Must     13         UC-15
           bỏ học của sinh viên hiện tại kèm                         
           giải thích SHAP                                           

  US-4.3   Là hệ thống, tôi cần dự báo           Must     8          UC-15
           enrollment/doanh thu 12 tháng dựa                         
           trên dữ liệu lịch sử và mùa vụ                            

  US-4.4   Là hệ thống, tôi cần trả lời câu hỏi  Must     13         UC-02
           tư vấn bằng RAG với độ chính xác cao,                     
           hạn chế hallucination                                     
  --------------------------------------------------------------------------------

# 10. Ví dụ chi tiết User Story kèm Acceptance Criteria

## 10.1. US-2.1 -- Danh sách Lead ưu tiên

*As a* **Tư vấn viên tuyển sinh,** *I want* **thấy danh sách Lead của
tôi được xếp hạng Hot/Warm/Cold,** *so that* **tôi ưu tiên liên hệ Lead
tiềm năng nhất trước, tránh bỏ lỡ cơ hội chuyển đổi.**

### Acceptance Criteria

-   Given tôi đã đăng nhập Advisor Dashboard, When trang tải xong, Then
    danh sách Lead của tôi hiển thị sắp xếp theo Score giảm dần kèm
    badge màu (Hot=đỏ, Warm=vàng, Cold=xanh).

-   Given Lead Scoring Engine trả về lỗi/timeout, When tôi mở danh sách,
    Then hệ thống hiển thị Score gần nhất đã lưu kèm nhãn "Dữ liệu chưa
    cập nhật" thay vì báo lỗi trắng trang.

-   Given tôi lọc theo kênh "Facebook", When tôi áp filter, Then danh
    sách chỉ hiển thị Lead có ContactChannel = Facebook, giữ nguyên thứ
    tự theo Score.

## 10.2. US-1.2 -- Chat với AI Consultant

*As a* **phụ huynh học sinh THPT,** *I want* **hỏi AI Consultant về học
phí và học bổng bất kỳ lúc nào,** *so that* **tôi có đủ thông tin để
quyết định mà không phải chờ tư vấn viên trong giờ hành chính.**

### Acceptance Criteria

-   Given tôi hỏi "Học phí ngành Công nghệ Thông tin bao nhiêu?", When
    AI truy xuất Knowledge Base, Then câu trả lời phải trích đúng thông
    tin học phí hiện hành, phản hồi trong \<500ms (P95).

-   Given câu hỏi ngoài phạm vi Knowledge Base (VD: khiếu nại cá nhân),
    When AI không tìm thấy ngữ cảnh phù hợp, Then AI không tự bịa thông
    tin mà chuyển tiếp cho tư vấn viên kèm tạo FollowupDate.

-   Given cuộc trò chuyện kết thúc, When phiên chat đóng, Then hệ thống
    lưu Interaction (Channel, InteractionType=Chat, SentimentScore,
    Timestamp) vào bảng Interactions.

## 10.3. US-3.4 -- Cảnh báo & khuyến nghị AI

*As a* **Trưởng phòng Tuyển sinh,** *I want* **nhận cảnh báo sớm khi một
chương trình có nguy cơ không đạt chỉ tiêu hoặc dropout cao,** *so that*
**tôi điều chỉnh ngân sách/nguồn lực kịp thời trước khi ảnh hưởng KPI
năm.**

### Acceptance Criteria

-   Given Risk Score của một chương trình \> 70%, When Executive
    Dashboard tải insight, Then insight được gắn nhãn "Critical" và hiển
    thị ở đầu danh sách.

-   Given tôi click vào một insight, When chi tiết mở ra, Then hệ thống
    hiển thị giải thích SHAP (top 3 yếu tố ảnh hưởng) kèm gợi ý hành
    động cụ thể.

-   Given tôi đánh dấu 1 insight là "Đã xử lý", When tôi lưu, Then trạng
    thái insight được cập nhật và không lặp lại cảnh báo trùng trong 7
    ngày tới.

# 11. Ma trận truy vết (Traceability Matrix)

Ma trận dưới đây liên kết Business Problem → Use Case → User Story → AI
Task/Feature, giúp đảm bảo mọi User Story đều bắt nguồn từ nhu cầu
nghiệp vụ thực và không bị trôi phạm vi (scope creep).

  -------------------------------------------------------------------------
  **Business Problem    **Use Case**  **User Story**   **AI Task / Bài toán
  (Đề bài)**                                           AI**
  --------------------- ------------- ---------------- --------------------
  Chi phí tuyển sinh &  UC-05, UC-06  US-2.1, US-2.2,  Lead Scoring &
  CPL cao                             US-4.1           Classification; Next
                                                       Best Action

  Conversion Rate thấp  UC-05, UC-02  US-2.1, US-1.2,  Lead Scoring; LLM
  (18% → 30%)                         US-4.4           Virtual Consultant
                                                       (RAG)

  Dữ liệu phân tán      UC-05, UC-07  US-2.1, US-2.3   Tích hợp dữ liệu đa
  (CRM/Zalo/FB/Email)                                  kênh (data pipeline
                                                       nền)

  Không có Dashboard    UC-09, UC-10, US-3.1, US-3.2,  BI & AI Analytics
  thời gian thực        UC-13         US-3.5           

  Không có dự báo doanh UC-11         US-3.3, US-4.3   Enrollment
  thu/sinh viên                                        Forecasting
                                                       (Prophet/LSTM)

  Nguy cơ bỏ học sinh   UC-12         US-3.4, US-4.2   Student Churn
  viên cũ                                              Prediction (Random
                                                       Forest + SHAP)

  Response Time chậm    UC-05, UC-06  US-2.1, US-2.2   Lead Scoring; Next
  (45 phút → \<10 phút)                                Best Action
  -------------------------------------------------------------------------

# 12. Checklist Review nhanh

## 12.1. Checklist Use Case

-   Actor và Goal được xác định rõ, không lẫn nhiều mục tiêu trong 1 Use
    Case?

-   Main Success Scenario đủ chi tiết để Dev/QA hiểu được luồng hệ
    thống?

-   Alternate Flow và Exception Flow đã liệt kê các tình huống thực tế
    (timeout AI, dữ liệu thiếu\...)?

-   Include/Extend được khai báo đúng, tránh trùng lặp logic (VD: Lead
    Scoring chỉ viết 1 lần ở UC-14)?

-   Postcondition đo lường được và có liên kết tới KPI kinh doanh?

## 12.2. Checklist User Story

-   Đạt tiêu chí INVEST (Mục 4.2)?

-   Có Acceptance Criteria dạng Gherkin, đủ để QA viết test case?

-   Đã gắn với Epic và Use Case gốc để đảm bảo Traceability?

-   Đã ước lượng story point và phù hợp năng lực sprint (không quá 8--13
    điểm)?

-   Đối với story liên quan AI: đã nêu rõ ngưỡng chất lượng (accuracy,
    latency, hallucination) làm tiêu chí Done?

*Hết tài liệu. Tài liệu này nên được cập nhật mỗi khi phạm vi dự án hoặc
Business Problem thay đổi, đảm bảo Use Case và User Story luôn phản ánh
đúng nhu cầu tuyển sinh thực tế của trường.*

# Phụ lục A: Sơ đồ Use Case tổng quát & theo Module

Sơ đồ dưới đây áp dụng đúng cấu trúc của mẫu công ty/trường (Hình X.X
Biểu đồ Usecase tổng quát → Biểu đồ Usecase theo từng nhóm chức năng),
vẽ theo UML đơn giản hóa cho dự án AI Enrollment Intelligence Platform.

## A.1. Biểu đồ Use Case tổng quát

![Hình A.1. Biểu đồ Usecase tổng quát -- AI Enrollment Intelligence
Platform](media/image1.png "Hình A.1. Biểu đồ Usecase tổng quát – AI Enrollment Intelligence Platform"){width="5.833333333333333in"
height="3.2708333333333335in"}

*Hình A.1. Biểu đồ Usecase tổng quát -- AI Enrollment Intelligence
Platform*

## A.2. Biểu đồ Use Case -- Admission Portal

![Hình A.2. Biểu đồ Usecase Admission
Portal](media/image2.png "Hình A.2. Biểu đồ Usecase Admission Portal"){width="5.416666666666667in"
height="2.8958333333333335in"}

*Hình A.2. Biểu đồ Usecase Admission Portal*

## A.3. Biểu đồ Use Case -- Advisor Dashboard

![Hình A.3. Biểu đồ Usecase Advisor
Dashboard](media/image3.png "Hình A.3. Biểu đồ Usecase Advisor Dashboard"){width="5.0in"
height="2.875in"}

*Hình A.3. Biểu đồ Usecase Advisor Dashboard*

## A.4. Biểu đồ Use Case -- Executive Dashboard

![Hình A.4. Biểu đồ Usecase Executive
Dashboard](media/image4.png "Hình A.4. Biểu đồ Usecase Executive Dashboard"){width="5.0in"
height="3.6770833333333335in"}

*Hình A.4. Biểu đồ Usecase Executive Dashboard*

## A.5. Biểu đồ Use Case -- AI Platform (dùng chung)

![Hình A.5. Biểu đồ Usecase AI Platform (Lead Scoring &
Churn/Forecasting)](media/image5.png "Hình A.5. Biểu đồ Usecase AI Platform (Lead Scoring & Churn/Forecasting)"){width="3.9583333333333335in"
height="2.5in"}

*Hình A.5. Biểu đồ Usecase AI Platform (Lead Scoring &
Churn/Forecasting)*

# Phụ lục B: Đặc tả chi tiết & Biểu đồ hoạt động của 15 Use Case

Mỗi Use Case dưới đây được trình bày theo đúng mẫu Bảng đặc tả chức năng
và Bảng mô tả hoạt động (swimlane) trong file "Mẫu usecase + đặc tả +
biểu đồ hoạt động.docx" / "Mau_Bang_BieuDo.xlsx" mà bạn cung cấp, đồng
thời bổ sung đầy đủ 13 mục kỹ thuật theo yêu cầu của Team Dev (Input,
Output, Business Rule, Validation, Database, API, Permission, Audit Log,
Notification, Performance Requirement, UI Wireframe, Acceptance
Criteria, Test Scenario) để Dev có thể hiện thực trực tiếp mà không cần
hỏi lại BA.

*Các mục Mục đích, Actor, Trigger, Sequence, Activity, Error đã có sẵn
trong Bảng đặc tả chức năng / Biểu đồ hoạt động bên dưới nên không lặp
lại thành mục riêng.*

## B.1. UC-01 -- Đăng ký thông tin / gửi yêu cầu tư vấn

*Module: Admission Portal*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Cho phép học sinh/phụ huynh điền form đăng ký thông  |
|               | tin cá nhân và nhu cầu tư vấn tuyển sinh trên        |
|               | Admission Portal, tạo mới một Lead trong hệ thống.   |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Người dùng nhấn nút "Đăng ký tư vấn" trên trang chủ  |
| hoạt          | Admission Portal.                                    |
+---------------+------------------------------------------------------+
| Actor         | Học sinh / Phụ huynh \| Hỗ trợ: Lead Scoring Engine  |
|               | (UC-14)                                              |
+---------------+------------------------------------------------------+
| Tiền điều     | Portal đang hoạt động; người dùng truy cập được      |
| kiện          | trang đăng ký.                                       |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Lead mới được tạo trong bảng Leads với trạng thái    |
|               | "Mới"; hệ thống gửi Lead này cho UC-14 để chấm điểm. |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Mở trang "Đăng ký tư vấn".                       |
|               |                                                      |
|               | 2\. Hiển thị form nhập liệu (Họ tên, Giới tính, Năm  |
|               | sinh, Tỉnh/Thành, Trường THPT, GPA, Điểm Toán, Điểm  |
|               | Anh, Ngành quan tâm, Ngân sách, Kênh liên hệ, Nguồn  |
|               | giới thiệu).                                         |
|               |                                                      |
|               | 3\. Nhập đầy đủ thông tin.                           |
|               |                                                      |
|               | 4\. Nhấn "Gửi đăng ký".                              |
|               |                                                      |
|               | 5\. Kiểm tra tính hợp lệ dữ liệu.                    |
|               |                                                      |
|               | 6\. Lưu Lead mới vào bảng Leads với LeadID tự sinh.  |
|               |                                                      |
|               | 7\. Gửi Lead mới cho UC-14 (Lead Scoring) để chấm    |
|               | điểm ban đầu.                                        |
|               |                                                      |
|               | 8\. Hiển thị thông báo "Đăng ký thành công, tư vấn   |
|               | viên sẽ liên hệ sớm".                                |
+---------------+------------------------------------------------------+
| Biến thể      | 3a. Người dùng chọn "Có quan tâm học bổng" → hệ      |
|               | thống đánh dấu HasScholarshipInterest = True để ưu   |
|               | tiên tư vấn học bổng.                                |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 5a. Thiếu trường bắt buộc hoặc sai định dạng (VD:    |
|               | năm sinh không hợp lệ) → hệ thống báo lỗi, yêu cầu   |
|               | nhập lại.                                            |
|               |                                                      |
|               | 6a. Lỗi lưu dữ liệu (mất kết nối DB) → hệ thống      |
|               | thông báo lỗi, không tạo Lead trùng.                 |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | LeadForm { StudentName, Gender(enum),                |
|               | BirthYear(int), Province, HighSchool, GPA(0--10),    |
|               | MathScore(0--10), EnglishScore(0--10),               |
|               | ProgramInterest, TuitionBudget(int),                 |
|               | ParentOccupation, ContactChannel(enum),              |
|               | ReferralSource, HasScholarshipInterest(bool) }       |
+---------------+------------------------------------------------------+
| Output        | { leadId, status: \"created\", scoringStatus:        |
|               | \"queued\" } hoặc danh sách lỗi validation           |
+---------------+------------------------------------------------------+
| Business Rule | Một số điện thoại/email chỉ được tạo tối đa 1 Lead   |
|               | "Mới" đang mở trong 30 ngày (chống trùng lặp).       |
|               |                                                      |
|               | GPA, MathScore, EnglishScore phải trong khoảng       |
|               | 0--10.                                               |
|               |                                                      |
|               | BirthYear phải tương ứng độ tuổi 15--35.             |
+---------------+------------------------------------------------------+
| Validation    | Bắt buộc: StudentName, BirthYear, Province,          |
|               | ProgramInterest, ContactChannel.                     |
|               |                                                      |
|               | Số điện thoại đúng định dạng VN (10 số, đầu 0);      |
|               | email đúng regex nếu có nhập.                        |
|               |                                                      |
|               | GPA/MathScore/EnglishScore: kiểu số, 0 ≤ giá trị ≤   |
|               | 10.                                                  |
+---------------+------------------------------------------------------+
| Database      | Leads (INSERT): LeadID (PK tự sinh), StudentName,    |
|               | Gender, BirthYear, Province, HighSchool, GPA,        |
|               | MathScore, EnglishScore, ProgramInterest,            |
|               | TuitionBudget, ParentOccupation, ContactChannel,     |
|               | ReferralSource, HasScholarshipInterest,              |
|               | EnrollmentStatus=False.                              |
+---------------+------------------------------------------------------+
| API           | Method: POST                                         |
|               |                                                      |
|               | Endpoint: /api/v1/leads                              |
|               |                                                      |
|               | Request mẫu: { \"studentName\":\"Nguyễn Văn An\",    |
|               | \"gender\":\"Male\", \"birthYear\":2007,             |
|               | \"province\":\"TP.HCM\", \"programInterest\":\"Công  |
|               | nghệ Thông tin\", \"tuitionBudget\":30,              |
|               | \"contactChannel\":\"Facebook\" }                    |
|               |                                                      |
|               | Response mẫu: { \"leadId\":\"L20260001\",            |
|               | \"status\":\"created\", \"scoringStatus\":\"queued\" |
|               | }                                                    |
+---------------+------------------------------------------------------+
| Permission    | Public -- không yêu cầu đăng nhập (form mở trên      |
|               | Admission Portal).                                   |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi LeadID, IP, thời gian tạo, kênh đăng ký; lưu tối |
|               | thiểu 2 năm phục vụ đối soát marketing.              |
+---------------+------------------------------------------------------+
| Notification  | Gửi email/SMS xác nhận đăng ký cho người dùng.       |
|               |                                                      |
|               | Thông báo in-app cho tư vấn viên phụ trách khu       |
|               | vực/ngành.                                           |
+---------------+------------------------------------------------------+
| Performance   | API phản hồi \<1s (P95).                             |
| Requirement   |                                                      |
|               | Chịu tải 200 request/phút vào giờ cao điểm tuyển     |
|               | sinh.                                                |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.1a. Biểu đồ hoạt động UC-01 -- Đăng ký thông tin / gửi yêu cầu
tư
vấn](media/image6.png "Hình B.1a. Biểu đồ hoạt động UC-01 – Đăng ký thông tin / gửi yêu cầu tư vấn"){width="3.3333333333333335in"
height="8.270833333333334in"}

*Hình B.1a. Biểu đồ hoạt động UC-01 -- Đăng ký thông tin / gửi yêu cầu
tư vấn*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**     **Loại**     **Mô tả**
  ---------- ---------------- ---------------- ------------ --------------------
  1          Mở trang "Đăng                    Hành động    Mở trang "Đăng ký tư
             ký tư vấn".                       người dùng   vấn".

  2                           Hiển thị form    Xử lý hệ     Hiển thị form nhập
                              nhập liệu (Họ    thống / AI   liệu (Họ tên, Giới
                              tên, Giới tính,               tính, Năm sinh,
                              Năm sinh,                     Tỉnh/Thành, Trường
                              Tỉnh/Thành,                   THPT, GPA, Điểm
                              Trường THPT,                  Toán, Điểm Anh,
                              GPA, Điểm Toán,               Ngành quan tâm, Ngân
                              Điểm Anh, Ngành               sách, Kênh liên hệ,
                              quan tâm, Ngân                Nguồn giới thiệu).
                              sách, Kênh liên               
                              hệ, Nguồn giới                
                              thiệu).                       

  3          Nhập đầy đủ                       Hành động    Nhập đầy đủ thông
             thông tin.                        người dùng   tin.

  4          Nhấn "Gửi đăng                    Hành động    Nhấn "Gửi đăng ký".
             ký".                              người dùng   

  5                           Kiểm tra tính    Xử lý hệ     Kiểm tra tính hợp lệ
                              hợp lệ dữ liệu.  thống / AI   dữ liệu.

  6                           Lưu Lead mới vào Xử lý hệ     Lưu Lead mới vào
                              bảng Leads với   thống / AI   bảng Leads với
                              LeadID tự sinh.               LeadID tự sinh.

  7                           Gửi Lead mới cho Xử lý hệ     Gửi Lead mới cho
                              UC-14 (Lead      thống / AI   UC-14 (Lead Scoring)
                              Scoring) để chấm              để chấm điểm ban
                              điểm ban đầu.                 đầu.

  8                           Hiển thị thông   Xử lý hệ     Hiển thị thông báo
                              báo "Đăng ký     thống / AI   "Đăng ký thành công,
                              thành công, tư                tư vấn viên sẽ liên
                              vấn viên sẽ liên              hệ sớm".
                              hệ sớm".                      
  ------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.1b. Wireframe màn hình UC-01 -- Đăng ký thông tin / gửi yêu cầu
tư
vấn](media/image7.png "Hình B.1b. Wireframe màn hình UC-01 – Đăng ký thông tin / gửi yêu cầu tư vấn"){width="3.3333333333333335in"
height="2.3541666666666665in"}

*Hình B.1b. Wireframe màn hình UC-01 -- Đăng ký thông tin / gửi yêu cầu
tư vấn*

### 5. Acceptance Criteria

-   Given tôi điền đầy đủ thông tin hợp lệ, When tôi nhấn Gửi đăng ký,
    Then hệ thống tạo Lead mới và hiển thị thông báo thành công trong
    \<1s.

-   Given tôi bỏ trống trường bắt buộc (Họ tên), When tôi nhấn Gửi đăng
    ký, Then hệ thống báo lỗi và không tạo Lead.

-   Given tôi đã đăng ký cùng số điện thoại trong 30 ngày qua, When tôi
    gửi đăng ký lần 2, Then hệ thống từ chối tạo Lead trùng.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-01-01   Đăng ký hợp lệ, đầy   Dữ liệu đúng định   Tạo Lead thành công,
             đủ trường             dạng                trả về leadId

  TC-01-02   Thiếu trường bắt buộc Bỏ trống Họ tên     Báo lỗi 400, không
                                                       tạo Lead

  TC-01-03   Trùng số điện thoại   SĐT đã có Lead      Từ chối tạo Lead
             trong 30 ngày         "Mới"               trùng
  --------------------------------------------------------------------------

## B.2. UC-02 -- Chat với AI Virtual Consultant

*Module: Admission Portal*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Học sinh/phụ huynh đặt câu hỏi về ngành học, học     |
|               | phí, học bổng và nhận tư vấn tự động 24/7 qua AI     |
|               | Virtual Consultant.                                  |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Người dùng mở khung chat trên Web/Zalo/Facebook.     |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Học sinh / Phụ huynh \| Hỗ trợ: AI Virtual           |
|               | Consultant (RAG + LLM)                               |
+---------------+------------------------------------------------------+
| Tiền điều     | Knowledge Base (ngành học, học phí, học bổng) đã     |
| kiện          | được index vào Vector DB (Qdrant/Milvus).            |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Câu hỏi được trả lời hoặc chuyển tiếp tư vấn viên;   |
|               | Interaction mới được ghi vào bảng Interactions.      |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Nhập câu hỏi vào khung chat.                     |
|               |                                                      |
|               | 2\. Truy xuất ngữ cảnh liên quan từ Knowledge Base   |
|               | (RAG retrieval).                                     |
|               |                                                      |
|               | 3\. LLM sinh câu trả lời cá nhân hóa dựa trên hồ sơ  |
|               | Lead (GPA, ProgramInterest, TuitionBudget).          |
|               |                                                      |
|               | 4\. Trả lời và gợi ý ngành học phù hợp.              |
|               |                                                      |
|               | 5\. Lưu Interaction mới (Channel,                    |
|               | InteractionType=Chat, SentimentScore, Timestamp).    |
+---------------+------------------------------------------------------+
| Biến thể      | 4a. Câu hỏi vượt phạm vi (VD: khiếu nại học phí) →   |
|               | hệ thống chuyển tiếp (handoff) cho tư vấn viên, tạo  |
|               | FollowupDate.                                        |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. Không tìm thấy ngữ cảnh phù hợp (retrieval rỗng) |
|               | → hệ thống trả lời an toàn, không tự bịa thông tin,  |
|               | đề nghị chuyển tư vấn viên (tránh hallucination).    |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | ChatRequest { sessionId(uuid), leadId(optional),     |
|               | message(string ≤1000 ký tự), channel(enum:           |
|               | Web/Zalo/Facebook) }                                 |
+---------------+------------------------------------------------------+
| Output        | { reply, suggestedPrograms\[\],                      |
|               | handoffToAdvisor(bool) }                             |
+---------------+------------------------------------------------------+
| Business Rule | Không trả lời thông tin học phí/học bổng chưa được   |
|               | xác nhận trong Knowledge Base.                       |
|               |                                                      |
|               | Tối đa 3 câu hỏi liên tiếp ngoài phạm vi trước khi   |
|               | bắt buộc handoff cho tư vấn viên.                    |
+---------------+------------------------------------------------------+
| Validation    | message không rỗng, tối đa 1000 ký tự.               |
|               |                                                      |
|               | sessionId hợp lệ (UUID).                             |
+---------------+------------------------------------------------------+
| Database      | Interactions (INSERT): InteractionID, LeadID,        |
|               | Channel, InteractionType=\"Chat\", Duration,         |
|               | SentimentScore, Timestamp.                           |
|               |                                                      |
|               | Leads (READ): GPA, ProgramInterest, TuitionBudget để |
|               | cá nhân hóa câu trả lời.                             |
+---------------+------------------------------------------------------+
| API           | Method: POST                                         |
|               |                                                      |
|               | Endpoint: /api/v1/chat/message                       |
|               |                                                      |
|               | Request mẫu: { \"sessionId\":\"S123\",               |
|               | \"leadId\":\"L20260001\", \"message\":\"Học phí      |
|               | ngành CNTT bao nhiêu?\", \"channel\":\"Web\" }       |
|               |                                                      |
|               | Response mẫu: { \"reply\":\"Học phí ngành CNTT hiện  |
|               | tại là\...\", \"suggestedPrograms\":\[\"Công nghệ    |
|               | Thông tin\"\], \"handoffToAdvisor\":false }          |
+---------------+------------------------------------------------------+
| Permission    | Public; rate-limit theo IP/session để chống spam.    |
+---------------+------------------------------------------------------+
| Audit Log     | Lưu toàn bộ hội thoại (câu hỏi, câu trả lời, nguồn   |
|               | RAG trích dẫn) phục vụ audit chất lượng AI.          |
+---------------+------------------------------------------------------+
| Notification  | Nếu handoff: thông báo in-app + email cho tư vấn     |
|               | viên phụ trách khu vực.                              |
+---------------+------------------------------------------------------+
| Performance   | Độ trễ phản hồi \<500ms (P95).                       |
| Requirement   |                                                      |
|               | Theo dõi Hallucination Score theo tiêu chí AI        |
|               | Benchmark.                                           |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.2a. Biểu đồ hoạt động UC-02 -- Chat với AI Virtual
Consultant](media/image8.png "Hình B.2a. Biểu đồ hoạt động UC-02 – Chat với AI Virtual Consultant"){width="3.3333333333333335in"
height="6.1875in"}

*Hình B.2a. Biểu đồ hoạt động UC-02 -- Chat với AI Virtual Consultant*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ---------------------------------------------------------------------------------------
  **Bước**   **Người dùng**  **Hệ thống**            **Loại**     **Mô tả**
  ---------- --------------- ----------------------- ------------ -----------------------
  1          Nhập câu hỏi                            Hành động    Nhập câu hỏi vào khung
             vào khung chat.                         người dùng   chat.

  2                          Truy xuất ngữ cảnh liên Xử lý hệ     Truy xuất ngữ cảnh liên
                             quan từ Knowledge Base  thống / AI   quan từ Knowledge Base
                             (RAG retrieval).                     (RAG retrieval).

  3                          LLM sinh câu trả lời cá Xử lý hệ     LLM sinh câu trả lời cá
                             nhân hóa dựa trên hồ sơ thống / AI   nhân hóa dựa trên hồ sơ
                             Lead (GPA,                           Lead (GPA,
                             ProgramInterest,                     ProgramInterest,
                             TuitionBudget).                      TuitionBudget).

  4                          Trả lời và gợi ý ngành  Xử lý hệ     Trả lời và gợi ý ngành
                             học phù hợp.            thống / AI   học phù hợp.

  5                          Lưu Interaction mới     Xử lý hệ     Lưu Interaction mới
                             (Channel,               thống / AI   (Channel,
                             InteractionType=Chat,                InteractionType=Chat,
                             SentimentScore,                      SentimentScore,
                             Timestamp).                          Timestamp).
  ---------------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.2b. Wireframe màn hình UC-02 -- Chat với AI Virtual
Consultant](media/image9.png "Hình B.2b. Wireframe màn hình UC-02 – Chat với AI Virtual Consultant"){width="3.3333333333333335in"
height="1.2604166666666667in"}

*Hình B.2b. Wireframe màn hình UC-02 -- Chat với AI Virtual Consultant*

### 5. Acceptance Criteria

-   Given tôi hỏi trong phạm vi Knowledge Base, When AI trả lời, Then
    câu trả lời chính xác và phản hồi \<500ms (P95).

-   Given câu hỏi ngoài phạm vi, When AI không tìm thấy ngữ cảnh, Then
    AI không tự bịa thông tin và chuyển tiếp tư vấn viên.

-   Given phiên chat đã hỏi quá 3 câu ngoài phạm vi, When người dùng hỏi
    tiếp, Then hệ thống tự động handoff cho tư vấn viên.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-02-01   Hỏi trong phạm vi KB  "Học phí ngành      Trả lời đúng, kèm
                                   CNTT?"              suggestedPrograms

  TC-02-02   Hỏi ngoài phạm vi     Câu hỏi khiếu nại   Handoff, tạo
                                   cá nhân             FollowupDate

  TC-02-03   Message rỗng          message = \"\"      Lỗi validation 400
  --------------------------------------------------------------------------

## B.3. UC-03 -- Xem trạng thái hồ sơ

*Module: Admission Portal*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Cho phép học sinh/phụ huynh theo dõi trạng thái hồ   |
|               | sơ tuyển sinh của mình theo thời gian thực.          |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Người dùng đăng nhập Admission Portal và chọn mục    |
| hoạt          | "Trạng thái hồ sơ".                                  |
+---------------+------------------------------------------------------+
| Actor         | Học sinh / Phụ huynh                                 |
+---------------+------------------------------------------------------+
| Tiền điều     | Người dùng đã có Lead/hồ sơ trong hệ thống (đã đăng  |
| kiện          | ký ở UC-01).                                         |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Người dùng nắm được trạng thái hiện tại của hồ sơ.   |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Đăng nhập Admission Portal.                      |
|               |                                                      |
|               | 2\. Chọn mục "Trạng thái hồ sơ".                     |
|               |                                                      |
|               | 3\. Truy vấn LeadID liên kết với tài khoản.          |
|               |                                                      |
|               | 4\. Hiển thị timeline: Đăng ký → Tư vấn → Nộp hồ sơ  |
|               | → Offer → Nhập học.                                  |
|               |                                                      |
|               | 5\. Hiển thị chi tiết Offer (nếu có) từ bảng Offers. |
+---------------+------------------------------------------------------+
| Biến thể      | 4a. Chưa có bước tiếp theo → hệ thống hiển thị "Đang |
|               | chờ xử lý" kèm dự kiến thời gian phản hồi.           |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 3a. Không tìm thấy Lead liên kết với tài khoản → hệ  |
|               | thống thông báo lỗi và hướng dẫn liên hệ hỗ trợ.     |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | GET request { leadId (suy ra từ token đăng nhập) }   |
+---------------+------------------------------------------------------+
| Output        | { status, timeline: \[{step,status,date}\], offer:   |
|               | object\|null }                                       |
+---------------+------------------------------------------------------+
| Business Rule | Chỉ hiển thị hồ sơ thuộc chính tài khoản đăng nhập   |
|               | (không cho xem hồ sơ người khác).                    |
+---------------+------------------------------------------------------+
| Validation    | Token hợp lệ, chưa hết hạn.                          |
+---------------+------------------------------------------------------+
| Database      | Leads (READ): EnrollmentStatus.                      |
|               |                                                      |
|               | Offers (READ): theo LeadID.                          |
+---------------+------------------------------------------------------+
| API           | Method: GET                                          |
|               |                                                      |
|               | Endpoint: /api/v1/leads/{leadId}/status              |
|               |                                                      |
|               | Request mẫu: --- (query theo token đăng nhập)        |
|               |                                                      |
|               | Response mẫu: { \"status\":\"Offer\",                |
|               | \"timeline\":\[\...\], \"offer\":{\...} }            |
+---------------+------------------------------------------------------+
| Permission    | Đăng nhập role Student/Parent; row-level security    |
|               | --- chỉ truy cập hồ sơ gắn với tài khoản của chính   |
|               | mình.                                                |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi log truy cập (ai xem hồ sơ nào, lúc nào) để phát |
|               | hiện truy cập trái phép.                             |
+---------------+------------------------------------------------------+
| Notification  | Không áp dụng trực tiếp trong UC này (thông báo khi  |
|               | đổi trạng thái thuộc UC khác).                       |
+---------------+------------------------------------------------------+
| Performance   | Phản hồi \<1s.                                       |
| Requirement   |                                                      |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.3a. Biểu đồ hoạt động UC-03 -- Xem trạng thái hồ
sơ](media/image10.png "Hình B.3a. Biểu đồ hoạt động UC-03 – Xem trạng thái hồ sơ"){width="3.3333333333333335in"
height="5.489583333333333in"}

*Hình B.3a. Biểu đồ hoạt động UC-03 -- Xem trạng thái hồ sơ*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**     **Loại**     **Mô tả**
  ---------- ---------------- ---------------- ------------ --------------------
  1          Đăng nhập                         Hành động    Đăng nhập Admission
             Admission                         người dùng   Portal.
             Portal.                                        

  2          Chọn mục "Trạng                   Hành động    Chọn mục "Trạng thái
             thái hồ sơ".                      người dùng   hồ sơ".

  3                           Truy vấn LeadID  Xử lý hệ     Truy vấn LeadID liên
                              liên kết với tài thống / AI   kết với tài khoản.
                              khoản.                        

  4                           Hiển thị         Xử lý hệ     Hiển thị timeline:
                              timeline: Đăng   thống / AI   Đăng ký → Tư vấn →
                              ký → Tư vấn →                 Nộp hồ sơ → Offer →
                              Nộp hồ sơ →                   Nhập học.
                              Offer → Nhập                  
                              học.                          

  5                           Hiển thị chi     Xử lý hệ     Hiển thị chi tiết
                              tiết Offer (nếu  thống / AI   Offer (nếu có) từ
                              có) từ bảng                   bảng Offers.
                              Offers.                       
  ------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.3b. Wireframe màn hình UC-03 -- Xem trạng thái hồ
sơ](media/image11.png "Hình B.3b. Wireframe màn hình UC-03 – Xem trạng thái hồ sơ"){width="3.3333333333333335in"
height="0.8541666666666666in"}

*Hình B.3b. Wireframe màn hình UC-03 -- Xem trạng thái hồ sơ*

### 5. Acceptance Criteria

-   Given tôi đăng nhập đúng tài khoản, When tôi mở Trạng thái hồ sơ,
    Then hệ thống chỉ hiển thị hồ sơ của tôi.

-   Given tôi cố truy cập LeadID của người khác qua URL trực tiếp, When
    request gửi đi, Then hệ thống từ chối (403).

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-03-01   Xem hồ sơ hợp lệ      Token đúng chủ      Hiển thị đúng
                                                       timeline & offer

  TC-03-02   Token hết hạn         Token expired       Yêu cầu đăng nhập lại

  TC-03-03   Truy cập LeadID người leadId không thuộc  Từ chối 403
             khác                  token               
  --------------------------------------------------------------------------

## B.4. UC-04 -- Chấp nhận / từ chối Offer nhập học

*Module: Admission Portal*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Cho phép học sinh phản hồi (chấp nhận/từ chối) Offer |
|               | nhập học đã nhận từ nhà trường.                      |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Người dùng mở thông báo Offer mới trên Admission     |
| hoạt          | Portal.                                              |
+---------------+------------------------------------------------------+
| Actor         | Học sinh / Phụ huynh                                 |
+---------------+------------------------------------------------------+
| Tiền điều     | Offer đã được tạo trong bảng Offers với trạng thái   |
| kiện          | Pending và còn hạn (ExpiryDate).                     |
+---------------+------------------------------------------------------+
| Hậu điều kiện | AcceptanceStatus của Offer được cập nhật             |
|               | (Accepted/Declined); nếu Accepted, DecisionDate và   |
|               | EnrollmentDate được ghi nhận.                        |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Mở chi tiết Offer (Chương trình, Học bổng, Học   |
|               | phí sau học bổng, Hạn chấp nhận).                    |
|               |                                                      |
|               | 2\. Chọn "Chấp nhận" hoặc "Từ chối".                 |
|               |                                                      |
|               | 3\. Yêu cầu xác nhận.                                |
|               |                                                      |
|               | 4\. Xác nhận quyết định.                             |
|               |                                                      |
|               | 5\. Cập nhật AcceptanceStatus và DecisionDate trong  |
|               | bảng Offers.                                         |
|               |                                                      |
|               | 6\. Nếu Accepted, tạo hồ sơ AcademicProfile sơ bộ và |
|               | thông báo bước nhập học tiếp theo.                   |
+---------------+------------------------------------------------------+
| Biến thể      | 2a. Người dùng chọn "Yêu cầu tư vấn thêm" trước khi  |
|               | quyết định → hệ thống chuyển sang UC-02 (Chat AI     |
|               | Consultant).                                         |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 1a. Offer đã hết hạn (quá ExpiryDate) → hệ thống     |
|               | hiển thị "Offer đã hết hạn", đề nghị liên hệ tư vấn  |
|               | viên xin gia hạn.                                    |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | { leadId, offerId, decision: Accepted\|Declined }    |
+---------------+------------------------------------------------------+
| Output        | { status, decisionDate, nextStep }                   |
+---------------+------------------------------------------------------+
| Business Rule | Chỉ được phản hồi khi ExpiryDate ≥ hôm nay.          |
|               |                                                      |
|               | Một Offer chỉ phản hồi 1 lần, không đổi quyết định   |
|               | sau khi đã Accepted.                                 |
+---------------+------------------------------------------------------+
| Validation    | decision thuộc {Accepted, Declined}.                 |
|               |                                                      |
|               | offerId phải thuộc về leadId trong request.          |
+---------------+------------------------------------------------------+
| Database      | Offers (UPDATE): AcceptanceStatus, DecisionDate,     |
|               | EnrollmentDate (nếu Accepted).                       |
|               |                                                      |
|               | AcademicProfile (INSERT sơ bộ nếu Accepted).         |
+---------------+------------------------------------------------------+
| API           | Method: PATCH                                        |
|               |                                                      |
|               | Endpoint: /api/v1/offers/{offerId}/decision          |
|               |                                                      |
|               | Request mẫu: { \"decision\":\"Accepted\" }           |
|               |                                                      |
|               | Response mẫu: { \"status\":\"Accepted\",             |
|               | \"decisionDate\":\"2026-07-10\", \"nextStep\":\"Hoàn |
|               | tất hồ sơ nhập học\" }                               |
+---------------+------------------------------------------------------+
| Permission    | Đăng nhập role Student/Parent; chỉ thao tác trên     |
|               | Offer của chính mình.                                |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi thời điểm quyết định, IP, thiết bị (phục vụ      |
|               | tranh chấp sau này).                                 |
+---------------+------------------------------------------------------+
| Notification  | Email xác nhận quyết định.                           |
|               |                                                      |
|               | Nếu Accepted: gửi hướng dẫn nhập học tiếp theo.      |
|               |                                                      |
|               | Thông báo cho tư vấn viên phụ trách.                 |
+---------------+------------------------------------------------------+
| Performance   | Cập nhật \<1s, dùng transaction để tránh             |
| Requirement   | race-condition khi Offer gần hết hạn.                |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.4a. Biểu đồ hoạt động UC-04 -- Chấp nhận / từ chối Offer nhập
học](media/image12.png "Hình B.4a. Biểu đồ hoạt động UC-04 – Chấp nhận / từ chối Offer nhập học"){width="3.3333333333333335in"
height="6.34375in"}

*Hình B.4a. Biểu đồ hoạt động UC-04 -- Chấp nhận / từ chối Offer nhập
học*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  --------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**       **Loại**     **Mô tả**
  ---------- ---------------- ------------------ ------------ --------------------
  1          Mở chi tiết                         Hành động    Mở chi tiết Offer
             Offer (Chương                       người dùng   (Chương trình, Học
             trình, Học bổng,                                 bổng, Học phí sau
             Học phí sau học                                  học bổng, Hạn chấp
             bổng, Hạn chấp                                   nhận).
             nhận).                                           

  2          Chọn "Chấp nhận"                    Hành động    Chọn "Chấp nhận"
             hoặc "Từ chối".                     người dùng   hoặc "Từ chối".

  3                           Yêu cầu xác nhận.  Xử lý hệ     Yêu cầu xác nhận.
                                                 thống / AI   

  4          Xác nhận quyết                      Hành động    Xác nhận quyết định.
             định.                               người dùng   

  5                           Cập nhật           Xử lý hệ     Cập nhật
                              AcceptanceStatus   thống / AI   AcceptanceStatus và
                              và DecisionDate                 DecisionDate trong
                              trong bảng Offers.              bảng Offers.

  6                           Nếu Accepted, tạo  Xử lý hệ     Nếu Accepted, tạo hồ
                              hồ sơ              thống / AI   sơ AcademicProfile
                              AcademicProfile sơ              sơ bộ và thông báo
                              bộ và thông báo                 bước nhập học tiếp
                              bước nhập học tiếp              theo.
                              theo.                           
  --------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.4b. Wireframe màn hình UC-04 -- Chấp nhận / từ chối Offer nhập
học](media/image13.png "Hình B.4b. Wireframe màn hình UC-04 – Chấp nhận / từ chối Offer nhập học"){width="3.3333333333333335in"
height="1.53125in"}

*Hình B.4b. Wireframe màn hình UC-04 -- Chấp nhận / từ chối Offer nhập
học*

### 5. Acceptance Criteria

-   Given Offer còn hạn, When tôi chọn Accepted, Then trạng thái cập
    nhật ngay và tôi nhận hướng dẫn bước tiếp theo.

-   Given Offer đã hết hạn, When tôi cố phản hồi, Then hệ thống từ chối
    và đề nghị liên hệ tư vấn viên.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-04-01   Accept hợp lệ         Offer còn hạn,      Cập nhật thành công,
                                   decision=Accepted   tạo AcademicProfile
                                                       sơ bộ

  TC-04-02   Decline hợp lệ        decision=Declined   Cập nhật trạng thái
                                                       Declined

  TC-04-03   Offer hết hạn         ExpiryDate \< hôm   Từ chối thao tác
                                   nay                 
  --------------------------------------------------------------------------

## B.5. UC-05 -- Xem danh sách Lead ưu tiên xử lý

*Module: Advisor Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Tư vấn viên xem danh sách Lead được AI chấm điểm,    |
|               | xếp hạng Hot/Warm/Cold để ưu tiên xử lý.             |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Tư vấn viên đăng nhập Advisor Dashboard.             |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Tư vấn viên \| Hỗ trợ: Lead Scoring Engine (UC-14)   |
+---------------+------------------------------------------------------+
| Tiền điều     | Tài khoản tư vấn viên hợp lệ; UC-14 đã chấm điểm     |
| kiện          | Lead.                                                |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Tư vấn viên biết thứ tự ưu tiên xử lý Lead; thời     |
|               | điểm xem Lead được ghi log phục vụ đo Response Time. |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Đăng nhập Advisor Dashboard.                     |
|               |                                                      |
|               | 2\. Gọi UC-14 để lấy Score và hạng Hot/Warm/Cold mới |
|               | nhất.                                                |
|               |                                                      |
|               | 3\. Hiển thị danh sách Lead sắp xếp theo Score giảm  |
|               | dần, kèm badge màu.                                  |
|               |                                                      |
|               | 4\. Chọn 1 Lead để xem chi tiết hồ sơ và lịch sử     |
|               | tương tác.                                           |
|               |                                                      |
|               | 5\. Ghi log thời điểm Lead được xem (tính Response   |
|               | Time).                                               |
+---------------+------------------------------------------------------+
| Biến thể      | 3a. Tư vấn viên lọc theo kênh tiếp cận hoặc theo     |
|               | chương trình quan tâm → hệ thống áp filter và hiển   |
|               | thị lại danh sách.                                   |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. UC-14 không phản hồi (timeout) → hệ thống hiển   |
|               | thị Score cũ nhất đã lưu kèm cảnh báo "Dữ liệu chưa  |
|               | cập nhật".                                           |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | GET { advisorId (từ token), filters: channel?,       |
|               | program? }                                           |
+---------------+------------------------------------------------------+
| Output        | \[ { leadId, name, score, rank, lastInteraction } \] |
+---------------+------------------------------------------------------+
| Business Rule | Chỉ hiển thị Lead được gán (assigned) đúng cho tư    |
|               | vấn viên đang đăng nhập.                             |
+---------------+------------------------------------------------------+
| Validation    | Giá trị filter (channel/program) phải thuộc danh mục |
|               | hợp lệ.                                              |
+---------------+------------------------------------------------------+
| Database      | Leads (READ) kết hợp kết quả UC-14 (Score, Rank).    |
|               |                                                      |
|               | Interactions (READ): lastInteraction.                |
+---------------+------------------------------------------------------+
| API           | Method: GET                                          |
|               |                                                      |
|               | Endpoint:                                            |
|               | /api/v1/advisors/{advisorId}/leads?channel=Facebook  |
|               |                                                      |
|               | Request mẫu: --- (query params)                      |
|               |                                                      |
|               | Response mẫu: \[ {                                   |
|               | \"leadId\":\"L20260001\",\"name\":\"Nguyễn Văn       |
|               | An\",\"score\":78,\"rank\":\"Hot\" } \]              |
+---------------+------------------------------------------------------+
| Permission    | Đăng nhập role Advisor; chỉ xem Lead thuộc phụ trách |
|               | của mình (Manager mới xem toàn team).                |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi log thời điểm xem từng Lead (phục vụ tính        |
|               | Response Time to Lead).                              |
+---------------+------------------------------------------------------+
| Notification  | Badge cảnh báo khi có Lead Hot mới chưa xử lý quá 30 |
|               | phút.                                                |
+---------------+------------------------------------------------------+
| Performance   | Tải danh sách \<2s cho tối đa 500 Lead/advisor.      |
| Requirement   |                                                      |
|               | Score cập nhật gần thực, độ trễ \<15 phút.           |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.5a. Biểu đồ hoạt động UC-05 -- Xem danh sách Lead ưu tiên xử
lý](media/image14.png "Hình B.5a. Biểu đồ hoạt động UC-05 – Xem danh sách Lead ưu tiên xử lý"){width="3.3333333333333335in"
height="6.1875in"}

*Hình B.5a. Biểu đồ hoạt động UC-05 -- Xem danh sách Lead ưu tiên xử lý*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**     **Loại**     **Mô tả**
  ---------- ---------------- ---------------- ------------ --------------------
  1          Đăng nhập                         Hành động    Đăng nhập Advisor
             Advisor                           người dùng   Dashboard.
             Dashboard.                                     

  2                           Gọi UC-14 để lấy Xử lý hệ     Gọi UC-14 để lấy
                              Score và hạng    thống / AI   Score và hạng
                              Hot/Warm/Cold                 Hot/Warm/Cold mới
                              mới nhất.                     nhất.

  3                           Hiển thị danh    Xử lý hệ     Hiển thị danh sách
                              sách Lead sắp    thống / AI   Lead sắp xếp theo
                              xếp theo Score                Score giảm dần, kèm
                              giảm dần, kèm                 badge màu.
                              badge màu.                    

  4          Chọn 1 Lead để                    Hành động    Chọn 1 Lead để xem
             xem chi tiết hồ                   người dùng   chi tiết hồ sơ và
             sơ và lịch sử                                  lịch sử tương tác.
             tương tác.                                     

  5                           Ghi log thời     Xử lý hệ     Ghi log thời điểm
                              điểm Lead được   thống / AI   Lead được xem (tính
                              xem (tính                     Response Time).
                              Response Time).               
  ------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.5b. Wireframe màn hình UC-05 -- Xem danh sách Lead ưu tiên xử
lý](media/image15.png "Hình B.5b. Wireframe màn hình UC-05 – Xem danh sách Lead ưu tiên xử lý"){width="3.3333333333333335in"
height="1.1041666666666667in"}

*Hình B.5b. Wireframe màn hình UC-05 -- Xem danh sách Lead ưu tiên xử
lý*

### 5. Acceptance Criteria

-   Given tôi đăng nhập Advisor Dashboard, When trang tải xong, Then
    Lead của tôi hiển thị theo Score giảm dần kèm badge màu.

-   Given UC-14 timeout, When tôi mở danh sách, Then hệ thống hiển thị
    Score cũ kèm cảnh báo thay vì lỗi trắng trang.

-   Given tôi không phải advisor phụ trách 1 Lead, When tôi truy cập chi
    tiết Lead đó qua URL trực tiếp, Then hệ thống từ chối truy cập.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-05-01   Tải danh sách đúng    advisorId hợp lệ    Hiển thị đúng Lead
             advisor                                   được phân công

  TC-05-02   Lọc theo kênh         channel=Facebook    Danh sách lọc đúng

  TC-05-03   Truy cập Lead không   leadId của advisor  Từ chối 403
             thuộc phụ trách       khác                
  --------------------------------------------------------------------------

## B.6. UC-06 -- Nhận gợi ý hành động tiếp theo (Next Best Action)

*Module: Advisor Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Hệ thống đề xuất kênh, thời điểm và nội dung tiếp    |
|               | cận tối ưu cho từng Lead dựa trên hồ sơ và lịch sử   |
|               | tương tác.                                           |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Tư vấn viên mở chi tiết 1 Lead từ UC-05.             |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Tư vấn viên \| Hỗ trợ: Lead Scoring Engine (UC-14)   |
+---------------+------------------------------------------------------+
| Tiền điều     | Lead có ít nhất hồ sơ cơ bản; có thể có/không có     |
| kiện          | lịch sử Interaction.                                 |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Tư vấn viên nhận được khuyến nghị hành động cụ thể   |
|               | để thực hiện.                                        |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Mở chi tiết Lead.                                |
|               |                                                      |
|               | 2\. Phân tích hồ sơ Lead và lịch sử Interactions.    |
|               |                                                      |
|               | 3\. Đề xuất kênh liên hệ, thời điểm tốt nhất, gợi ý  |
|               | nội dung trao đổi.                                   |
|               |                                                      |
|               | 4\. Thực hiện hành động theo gợi ý hoặc điều chỉnh.  |
|               |                                                      |
|               | 5\. Ghi nhận hành động thực tế để cải thiện mô hình. |
+---------------+------------------------------------------------------+
| Biến thể      | 4a. Tư vấn viên bỏ qua gợi ý và tự chọn cách tiếp    |
|               | cận khác → hệ thống vẫn ghi log để đối chiếu hiệu    |
|               | quả.                                                 |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. Không đủ dữ liệu để gợi ý (Lead quá mới) → hệ    |
|               | thống đề xuất hành động mặc định theo kịch bản chuẩn |
|               | (gọi điện chào mừng trong 24h).                      |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | { leadId }                                           |
+---------------+------------------------------------------------------+
| Output        | { recommendedChannel, recommendedTime,               |
|               | suggestedContent }                                   |
+---------------+------------------------------------------------------+
| Business Rule | Nếu Lead chưa có Interaction nào, dùng kịch bản mặc  |
|               | định (gọi điện chào mừng trong 24h).                 |
+---------------+------------------------------------------------------+
| Validation    | leadId phải tồn tại và thuộc advisor gửi request.    |
+---------------+------------------------------------------------------+
| Database      | Leads, Interactions (READ -- lịch sử).               |
|               |                                                      |
|               | Interactions (ghi log hành động thực tế sau khi      |
|               | advisor thực hiện, qua UC-07).                       |
+---------------+------------------------------------------------------+
| API           | Method: GET                                          |
|               |                                                      |
|               | Endpoint: /api/v1/leads/{leadId}/next-best-action    |
|               |                                                      |
|               | Request mẫu: ---                                     |
|               |                                                      |
|               | Response mẫu: { \"channel\":\"Zalo\",                |
|               | \"time\":\"09:00-11:00\", \"content\":\"Giới thiệu   |
|               | học bổng\...\" }                                     |
+---------------+------------------------------------------------------+
| Permission    | Đăng nhập role Advisor, chỉ cho Lead được phân công. |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi log gợi ý đã đưa ra và advisor có làm theo hay   |
|               | không (đánh giá hiệu quả mô hình).                   |
+---------------+------------------------------------------------------+
| Notification  | Nhắc nhở nếu Lead Hot quá 24h chưa được liên hệ theo |
|               | gợi ý.                                               |
+---------------+------------------------------------------------------+
| Performance   | Trả gợi ý \<2s.                                      |
| Requirement   |                                                      |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.6a. Biểu đồ hoạt động UC-06 -- Nhận gợi ý hành động tiếp theo
(Next Best
Action)](media/image16.png "Hình B.6a. Biểu đồ hoạt động UC-06 – Nhận gợi ý hành động tiếp theo (Next Best Action)"){width="3.3333333333333335in"
height="6.0in"}

*Hình B.6a. Biểu đồ hoạt động UC-06 -- Nhận gợi ý hành động tiếp theo
(Next Best Action)*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**     **Loại**     **Mô tả**
  ---------- ---------------- ---------------- ------------ --------------------
  1          Mở chi tiết                       Hành động    Mở chi tiết Lead.
             Lead.                             người dùng   

  2                           Phân tích hồ sơ  Xử lý hệ     Phân tích hồ sơ Lead
                              Lead và lịch sử  thống / AI   và lịch sử
                              Interactions.                 Interactions.

  3                           Đề xuất kênh     Xử lý hệ     Đề xuất kênh liên
                              liên hệ, thời    thống / AI   hệ, thời điểm tốt
                              điểm tốt nhất,                nhất, gợi ý nội dung
                              gợi ý nội dung                trao đổi.
                              trao đổi.                     

  4          Thực hiện hành                    Hành động    Thực hiện hành động
             động theo gợi ý                   người dùng   theo gợi ý hoặc điều
             hoặc điều chỉnh.                               chỉnh.

  5                           Ghi nhận hành    Xử lý hệ     Ghi nhận hành động
                              động thực tế để  thống / AI   thực tế để cải thiện
                              cải thiện mô                  mô hình.
                              hình.                         
  ------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.6b. Wireframe màn hình UC-06 -- Nhận gợi ý hành động tiếp theo
(Next Best
Action)](media/image17.png "Hình B.6b. Wireframe màn hình UC-06 – Nhận gợi ý hành động tiếp theo (Next Best Action)"){width="3.3333333333333335in"
height="1.5in"}

*Hình B.6b. Wireframe màn hình UC-06 -- Nhận gợi ý hành động tiếp theo
(Next Best Action)*

### 5. Acceptance Criteria

-   Given Lead có lịch sử tương tác, When tư vấn viên mở gợi ý, Then hệ
    thống trả kênh/thời điểm/nội dung cụ thể.

-   Given Lead chưa có tương tác, When mở gợi ý, Then hệ thống trả kịch
    bản mặc định.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-06-01   Lead có lịch sử       Lead có ≥1          Gợi ý cá nhân hóa
                                   Interaction         

  TC-06-02   Lead mới              Lead chưa có        Trả kịch bản mặc định
                                   Interaction         

  TC-06-03   leadId không tồn tại  leadId sai          Lỗi 404
  --------------------------------------------------------------------------

## B.7. UC-07 -- Ghi nhận tương tác với Lead

*Module: Advisor Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Tư vấn viên ghi lại nội dung, kênh, thời lượng của   |
|               | mỗi lần tương tác với Lead sau khi liên hệ.          |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Tư vấn viên kết thúc cuộc gọi/chat/gặp mặt với Lead. |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Tư vấn viên                                          |
+---------------+------------------------------------------------------+
| Tiền điều     | Tư vấn viên đang xử lý 1 Lead cụ thể.                |
| kiện          |                                                      |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Interaction mới được lưu vào bảng Interactions, làm  |
|               | dữ liệu đầu vào cho UC-05/UC-06 lần sau.             |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Chọn "Ghi nhận tương tác" tại hồ sơ Lead.        |
|               |                                                      |
|               | 2\. Hiển thị form (Channel, InteractionType,         |
|               | Duration, ghi chú).                                  |
|               |                                                      |
|               | 3\. Nhập thông tin và đánh giá kết quả trao đổi.     |
|               |                                                      |
|               | 4\. Chọn ngày Follow-up tiếp theo (nếu cần).         |
|               |                                                      |
|               | 5\. Lưu Interaction (SentimentScore tự tính từ ghi   |
|               | chú hoặc theo lựa chọn thủ công).                    |
+---------------+------------------------------------------------------+
| Biến thể      | 3a. Tư vấn viên dùng ghi chú giọng nói → hệ thống    |
|               | chuyển giọng nói sang văn bản trước khi lưu.         |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 5a. Lỗi lưu dữ liệu → hệ thống giữ bản nháp cục bộ   |
|               | và cảnh báo thử lại.                                 |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | { leadId, channel, interactionType, duration, notes, |
|               | followupDate }                                       |
+---------------+------------------------------------------------------+
| Output        | { interactionId, status: \"saved\" }                 |
+---------------+------------------------------------------------------+
| Business Rule | Duration \> 0 nếu interactionType=Call.              |
|               |                                                      |
|               | followupDate (nếu có) phải sau ngày hiện tại.        |
+---------------+------------------------------------------------------+
| Validation    | Bắt buộc: channel, interactionType.                  |
|               |                                                      |
|               | followupDate đúng định dạng ngày và ở tương lai.     |
+---------------+------------------------------------------------------+
| Database      | Interactions (INSERT): InteractionID, LeadID,        |
|               | Channel, InteractionType, Duration, SentimentScore,  |
|               | FollowupDate, Advisor, Timestamp.                    |
+---------------+------------------------------------------------------+
| API           | Method: POST                                         |
|               |                                                      |
|               | Endpoint: /api/v1/interactions                       |
|               |                                                      |
|               | Request mẫu: { \"leadId\":\"L20260001\",             |
|               | \"channel\":\"Call\", \"interactionType\":\"Call\",  |
|               | \"duration\":12, \"notes\":\"Quan tâm học bổng\" }   |
|               |                                                      |
|               | Response mẫu: { \"interactionId\":\"INT00001\",      |
|               | \"status\":\"saved\" }                               |
+---------------+------------------------------------------------------+
| Permission    | Đăng nhập role Advisor, chỉ ghi cho Lead được phân   |
|               | công.                                                |
+---------------+------------------------------------------------------+
| Audit Log     | Lưu vết ai ghi, khi nào, nội dung gốc; không cho     |
|               | sửa/xóa sau 24h (chỉ bổ sung ghi chú mới).           |
+---------------+------------------------------------------------------+
| Notification  | Không áp dụng trực tiếp; dữ liệu là input cho        |
|               | UC-05/UC-06 lần sau.                                 |
+---------------+------------------------------------------------------+
| Performance   | Lưu thành công \<1s; giữ bản nháp local nếu mất kết  |
| Requirement   | nối.                                                 |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.7a. Biểu đồ hoạt động UC-07 -- Ghi nhận tương tác với
Lead](media/image18.png "Hình B.7a. Biểu đồ hoạt động UC-07 – Ghi nhận tương tác với Lead"){width="3.3333333333333335in"
height="6.1875in"}

*Hình B.7a. Biểu đồ hoạt động UC-07 -- Ghi nhận tương tác với Lead*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  --------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**       **Loại**     **Mô tả**
  ---------- ---------------- ------------------ ------------ --------------------
  1          Chọn "Ghi nhận                      Hành động    Chọn "Ghi nhận tương
             tương tác" tại                      người dùng   tác" tại hồ sơ Lead.
             hồ sơ Lead.                                      

  2                           Hiển thị form      Xử lý hệ     Hiển thị form
                              (Channel,          thống / AI   (Channel,
                              InteractionType,                InteractionType,
                              Duration, ghi                   Duration, ghi chú).
                              chú).                           

  3          Nhập thông tin                      Hành động    Nhập thông tin và
             và đánh giá kết                     người dùng   đánh giá kết quả
             quả trao đổi.                                    trao đổi.

  4          Chọn ngày                           Hành động    Chọn ngày Follow-up
             Follow-up tiếp                      người dùng   tiếp theo (nếu cần).
             theo (nếu cần).                                  

  5                           Lưu Interaction    Xử lý hệ     Lưu Interaction
                              (SentimentScore tự thống / AI   (SentimentScore tự
                              tính từ ghi chú                 tính từ ghi chú hoặc
                              hoặc theo lựa chọn              theo lựa chọn thủ
                              thủ công).                      công).
  --------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.7b. Wireframe màn hình UC-07 -- Ghi nhận tương tác với
Lead](media/image19.png "Hình B.7b. Wireframe màn hình UC-07 – Ghi nhận tương tác với Lead"){width="3.3333333333333335in"
height="1.5104166666666667in"}

*Hình B.7b. Wireframe màn hình UC-07 -- Ghi nhận tương tác với Lead*

### 5. Acceptance Criteria

-   Given tôi nhập đầy đủ thông tin, When tôi lưu, Then Interaction lưu
    thành công và xuất hiện ngay trong lịch sử Lead.

-   Given followupDate ở quá khứ, When tôi lưu, Then hệ thống báo lỗi và
    yêu cầu chọn lại.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-07-01   Lưu hợp lệ            Dữ liệu đầy đủ      Lưu thành công

  TC-07-02   followupDate quá khứ  followupDate \< hôm Lỗi validation
                                   nay                 

  TC-07-03   Mất kết nối giữa      Ngắt mạng khi lưu   Giữ bản nháp, không
             chừng                                     mất dữ liệu
  --------------------------------------------------------------------------

## B.8. UC-08 -- Theo dõi hiệu suất cá nhân

*Module: Advisor Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Tư vấn viên xem các chỉ số hiệu suất cá nhân và so   |
|               | sánh với đồng nghiệp.                                |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Tư vấn viên mở tab "Hiệu suất của tôi".              |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Tư vấn viên \| Hỗ trợ: Advisor Performance Analytics |
+---------------+------------------------------------------------------+
| Tiền điều     | Có đủ dữ liệu Interaction/Offer liên kết với tư vấn  |
| kiện          | viên.                                                |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Tư vấn viên biết vị trí của mình trong bảng xếp hạng |
|               | và các điểm cần cải thiện.                           |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Mở tab Hiệu suất.                                |
|               |                                                      |
|               | 2\. Tính Conversion Rate, thời gian phản hồi trung   |
|               | bình, số Lead đã chuyển đổi.                         |
|               |                                                      |
|               | 3\. Hiển thị biểu đồ cá nhân và vị trí trong         |
|               | leaderboard.                                         |
|               |                                                      |
|               | 4\. Hiển thị gợi ý cải thiện (VD: "Cần rút ngắn thời |
|               | gian phản hồi").                                     |
+---------------+------------------------------------------------------+
| Biến thể      | 3a. Tư vấn viên lọc theo khoảng thời gian            |
|               | (tuần/tháng/quý).                                    |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. Chưa đủ dữ liệu (tư vấn viên mới) → hệ thống     |
|               | hiển thị "Chưa đủ dữ liệu để đánh giá".              |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | GET { advisorId, period: week\|month\|quarter }      |
+---------------+------------------------------------------------------+
| Output        | { conversionRate, avgResponseTime,                   |
|               | leaderboardPosition, tips }                          |
+---------------+------------------------------------------------------+
| Business Rule | Cần tối thiểu 10 Lead xử lý trong kỳ mới tính toán   |
|               | xếp hạng.                                            |
+---------------+------------------------------------------------------+
| Validation    | period thuộc {week, month, quarter}.                 |
+---------------+------------------------------------------------------+
| Database      | Interactions, Offers (READ theo Advisor).            |
+---------------+------------------------------------------------------+
| API           | Method: GET                                          |
|               |                                                      |
|               | Endpoint:                                            |
|               | /                                                    |
|               | api/v1/advisors/{advisorId}/performance?period=month |
|               |                                                      |
|               | Request mẫu: ---                                     |
|               |                                                      |
|               | Response mẫu: { \"conversionRate\":0.32,             |
|               | \"avgResponseTime\":9, \"rank\":3 }                  |
+---------------+------------------------------------------------------+
| Permission    | Đăng nhập role Advisor (xem của mình) hoặc Manager   |
|               | (xem toàn team).                                     |
+---------------+------------------------------------------------------+
| Audit Log     | Không bắt buộc -- dữ liệu tổng hợp, không nhạy cảm.  |
+---------------+------------------------------------------------------+
| Notification  | Email tóm tắt hiệu suất hàng tuần (tùy chọn          |
|               | bật/tắt).                                            |
+---------------+------------------------------------------------------+
| Performance   | Tính toán & hiển thị \<2s cho dữ liệu 1 quý.         |
| Requirement   |                                                      |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.8a. Biểu đồ hoạt động UC-08 -- Theo dõi hiệu suất cá
nhân](media/image20.png "Hình B.8a. Biểu đồ hoạt động UC-08 – Theo dõi hiệu suất cá nhân"){width="3.3333333333333335in"
height="5.489583333333333in"}

*Hình B.8a. Biểu đồ hoạt động UC-08 -- Theo dõi hiệu suất cá nhân*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**     **Loại**     **Mô tả**
  ---------- ---------------- ---------------- ------------ --------------------
  1          Mở tab Hiệu                       Hành động    Mở tab Hiệu suất.
             suất.                             người dùng   

  2                           Tính Conversion  Xử lý hệ     Tính Conversion
                              Rate, thời gian  thống / AI   Rate, thời gian phản
                              phản hồi trung                hồi trung bình, số
                              bình, số Lead đã              Lead đã chuyển đổi.
                              chuyển đổi.                   

  3                           Hiển thị biểu đồ Xử lý hệ     Hiển thị biểu đồ cá
                              cá nhân và vị    thống / AI   nhân và vị trí trong
                              trí trong                     leaderboard.
                              leaderboard.                  

  4                           Hiển thị gợi ý   Xử lý hệ     Hiển thị gợi ý cải
                              cải thiện (VD:   thống / AI   thiện (VD: "Cần rút
                              "Cần rút ngắn                 ngắn thời gian phản
                              thời gian phản                hồi").
                              hồi").                        
  ------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.8b. Wireframe màn hình UC-08 -- Theo dõi hiệu suất cá
nhân](media/image21.png "Hình B.8b. Wireframe màn hình UC-08 – Theo dõi hiệu suất cá nhân"){width="3.3333333333333335in"
height="1.2604166666666667in"}

*Hình B.8b. Wireframe màn hình UC-08 -- Theo dõi hiệu suất cá nhân*

### 5. Acceptance Criteria

-   Given tôi đã xử lý ≥10 Lead trong tháng, When tôi mở tab Hiệu suất,
    Then hệ thống hiển thị đúng chỉ số và vị trí xếp hạng.

-   Given tôi mới, chưa đủ 10 Lead, When tôi mở tab, Then hệ thống hiển
    thị "Chưa đủ dữ liệu".

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-08-01   Đủ dữ liệu            ≥10 Lead trong kỳ   Hiển thị đúng chỉ số
                                                       & rank

  TC-08-02   Chưa đủ dữ liệu       \<10 Lead           Thông báo chưa đủ dữ
                                                       liệu

  TC-08-03   Đổi kỳ báo cáo        period=quarter      Cập nhật đúng khoảng
                                                       thời gian
  --------------------------------------------------------------------------

## B.9. UC-09 -- Xem KPI tổng quan tuyển sinh

*Module: Executive Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Ban Giám đốc xem các KPI tổng quan (Conversion Rate, |
|               | Enrollment, Revenue, CAC) theo thời gian thực.       |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Ban Giám đốc mở Executive Dashboard.                 |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Ban Giám đốc                                         |
+---------------+------------------------------------------------------+
| Tiền điều     | Dữ liệu Leads/Offers/Interactions được đồng bộ đầy   |
| kiện          | đủ.                                                  |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Ban Giám đốc nắm được tình hình tuyển sinh hiện tại  |
|               | so với mục tiêu.                                     |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Đăng nhập Executive Dashboard.                   |
|               |                                                      |
|               | 2\. Tổng hợp dữ liệu từ Leads, Offers, Interactions  |
|               | theo thời gian thực.                                 |
|               |                                                      |
|               | 3\. Hiển thị KPI Cards: Conversion Rate, Enrollment  |
|               | YTD, Revenue YTD, CAC.                               |
|               |                                                      |
|               | 4\. So sánh với target và hiển thị mũi tên           |
|               | tăng/giảm.                                           |
+---------------+------------------------------------------------------+
| Biến thể      | 3a. Ban Giám đốc chọn khoảng thời gian khác (tháng   |
|               | trước, quý trước) để so sánh.                        |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. Dữ liệu đồng bộ lỗi/trễ → hệ thống hiển thị nhãn |
|               | "Dữ liệu tính đến \[thời điểm\]" thay vì real-time.  |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | GET { dateRange }                                    |
+---------------+------------------------------------------------------+
| Output        | { conversionRate, enrollmentYTD, revenueYTD, cac,    |
|               | comparedToTarget }                                   |
+---------------+------------------------------------------------------+
| Business Rule | KPI chỉ tính trên dữ liệu đã đối soát (loại Lead     |
|               | trùng/spam).                                         |
+---------------+------------------------------------------------------+
| Validation    | dateRange hợp lệ, không vượt quá ngày hiện tại.      |
+---------------+------------------------------------------------------+
| Database      | Tổng hợp Leads, Offers, Interactions (qua data       |
|               | warehouse/aggregation job).                          |
+---------------+------------------------------------------------------+
| API           | Method: GET                                          |
|               |                                                      |
|               | Endpoint: /api/v1/executive/kpi?range=YTD            |
|               |                                                      |
|               | Request mẫu: ---                                     |
|               |                                                      |
|               | Response mẫu: { \"conversionRate\":0.28,             |
|               | \"enrollmentYTD\":1247, \"revenueYTD\":\"58.2B\",    |
|               | \"cac\":4200000 }                                    |
+---------------+------------------------------------------------------+
| Permission    | Đăng nhập role Executive/Admin only.                 |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi log truy cập Dashboard điều hành (dữ liệu tài    |
|               | chính nhạy cảm).                                     |
+---------------+------------------------------------------------------+
| Notification  | Cảnh báo tự động nếu Conversion Rate giảm \>5% so    |
|               | với tuần trước.                                      |
+---------------+------------------------------------------------------+
| Performance   | Dashboard tải \<3s; dữ liệu trễ tối đa 15 phút so    |
| Requirement   | với thời gian thực.                                  |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.9a. Biểu đồ hoạt động UC-09 -- Xem KPI tổng quan tuyển
sinh](media/image22.png "Hình B.9a. Biểu đồ hoạt động UC-09 – Xem KPI tổng quan tuyển sinh"){width="3.3333333333333335in"
height="5.322916666666667in"}

*Hình B.9a. Biểu đồ hoạt động UC-09 -- Xem KPI tổng quan tuyển sinh*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**     **Loại**     **Mô tả**
  ---------- ---------------- ---------------- ------------ --------------------
  1          Đăng nhập                         Hành động    Đăng nhập Executive
             Executive                         người dùng   Dashboard.
             Dashboard.                                     

  2                           Tổng hợp dữ liệu Xử lý hệ     Tổng hợp dữ liệu từ
                              từ Leads,        thống / AI   Leads, Offers,
                              Offers,                       Interactions theo
                              Interactions                  thời gian thực.
                              theo thời gian                
                              thực.                         

  3                           Hiển thị KPI     Xử lý hệ     Hiển thị KPI Cards:
                              Cards:           thống / AI   Conversion Rate,
                              Conversion Rate,              Enrollment YTD,
                              Enrollment YTD,               Revenue YTD, CAC.
                              Revenue YTD,                  
                              CAC.                          

  4                           So sánh với      Xử lý hệ     So sánh với target
                              target và hiển   thống / AI   và hiển thị mũi tên
                              thị mũi tên                   tăng/giảm.
                              tăng/giảm.                    
  ------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.9b. Wireframe màn hình UC-09 -- Xem KPI tổng quan tuyển
sinh](media/image23.png "Hình B.9b. Wireframe màn hình UC-09 – Xem KPI tổng quan tuyển sinh"){width="3.3333333333333335in"
height="0.6145833333333334in"}

*Hình B.9b. Wireframe màn hình UC-09 -- Xem KPI tổng quan tuyển sinh*

### 5. Acceptance Criteria

-   Given dữ liệu đã đồng bộ, When tôi mở Executive Dashboard, Then KPI
    hiển thị đúng kèm so sánh target.

-   Given dữ liệu đồng bộ lỗi/trễ, When tôi mở, Then hệ thống hiển thị
    thời điểm dữ liệu gần nhất thay vì số liệu sai.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-09-01   Tải KPI bình thường   Dữ liệu đầy đủ      Hiển thị đúng 4 KPI
                                                       Card

  TC-09-02   Dữ liệu đồng bộ trễ   Job đồng bộ lỗi     Hiển thị nhãn cảnh
                                                       báo thời điểm dữ liệu

  TC-09-03   User không phải       Role=Advisor        Từ chối truy cập 403
             Executive                                 
  --------------------------------------------------------------------------

## B.10. UC-10 -- Xem phễu tuyển sinh & phân tích drop-off

*Module: Executive Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Xem phễu tuyển sinh 5 bước (Lead → Nộp hồ sơ → Phỏng |
|               | vấn → Offer → Enrollment) và tỷ lệ rớt ở từng bước.  |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Ban Giám đốc chọn tab "Enrollment Funnel".           |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Ban Giám đốc                                         |
+---------------+------------------------------------------------------+
| Tiền điều     | Có đủ dữ liệu trạng thái Lead qua các bước.          |
| kiện          |                                                      |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Ban Giám đốc xác định được điểm nghẽn (bottleneck)   |
|               | lớn nhất trong phễu.                                 |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Mở tab Enrollment Funnel.                        |
|               |                                                      |
|               | 2\. Tính số lượng Lead ở mỗi bước phễu.              |
|               |                                                      |
|               | 3\. Hiển thị biểu đồ phễu kèm % chuyển đổi giữa các  |
|               | bước.                                                |
|               |                                                      |
|               | 4\. Làm nổi bật (highlight) bước có drop-off cao     |
|               | nhất.                                                |
+---------------+------------------------------------------------------+
| Biến thể      | 3a. Ban Giám đốc lọc phễu theo chương trình học hoặc |
|               | khu vực.                                             |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. Thiếu dữ liệu ở 1 bước (VD: chưa ghi nhận phỏng  |
|               | vấn) → hệ thống hiển thị "N/A" cho bước đó thay vì   |
|               | số liệu sai.                                         |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | GET { dateRange, program?, region? }                 |
+---------------+------------------------------------------------------+
| Output        | { stages: \[{ name, count, conversionPct }\] }       |
+---------------+------------------------------------------------------+
| Business Rule | Drop-off \>30% ở 1 bước tự động gắn cờ "cần chú ý".  |
+---------------+------------------------------------------------------+
| Validation    | Filter chương trình/khu vực phải thuộc danh mục có   |
|               | thật.                                                |
+---------------+------------------------------------------------------+
| Database      | Leads (READ theo trạng thái từng bước), Offers       |
|               | (READ).                                              |
+---------------+------------------------------------------------------+
| API           | Method: GET                                          |
|               |                                                      |
|               | Endpoint: /api/v1/executive/funnel?range=YTD         |
|               |                                                      |
|               | Request mẫu: ---                                     |
|               |                                                      |
|               | Response mẫu: {                                      |
|               | \"stages\":                                          |
|               | \[{\"name\":\"Lead\",\"count\":5000},{\"name\":\"Nộp |
|               | hồ sơ\",\"count\":2500}\] }                          |
+---------------+------------------------------------------------------+
| Permission    | Role Executive/Admin.                                |
+---------------+------------------------------------------------------+
| Audit Log     | Log truy cập chung (không cần chi tiết từng thao     |
|               | tác).                                                |
+---------------+------------------------------------------------------+
| Notification  | Không áp dụng trực tiếp (chỉ hiển thị trực quan;     |
|               | cảnh báo qua UC-12).                                 |
+---------------+------------------------------------------------------+
| Performance   | Render \<2s.                                         |
| Requirement   |                                                      |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.10a. Biểu đồ hoạt động UC-10 -- Xem phễu tuyển sinh & phân tích
drop-off](media/image24.png "Hình B.10a. Biểu đồ hoạt động UC-10 – Xem phễu tuyển sinh & phân tích drop-off"){width="3.3333333333333335in"
height="5.375in"}

*Hình B.10a. Biểu đồ hoạt động UC-10 -- Xem phễu tuyển sinh & phân tích
drop-off*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**     **Loại**     **Mô tả**
  ---------- ---------------- ---------------- ------------ --------------------
  1          Mở tab                            Hành động    Mở tab Enrollment
             Enrollment                        người dùng   Funnel.
             Funnel.                                        

  2                           Tính số lượng    Xử lý hệ     Tính số lượng Lead ở
                              Lead ở mỗi bước  thống / AI   mỗi bước phễu.
                              phễu.                         

  3                           Hiển thị biểu đồ Xử lý hệ     Hiển thị biểu đồ
                              phễu kèm %       thống / AI   phễu kèm % chuyển
                              chuyển đổi giữa               đổi giữa các bước.
                              các bước.                     

  4                           Làm nổi bật      Xử lý hệ     Làm nổi bật
                              (highlight) bước thống / AI   (highlight) bước có
                              có drop-off cao               drop-off cao nhất.
                              nhất.                         
  ------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.10b. Wireframe màn hình UC-10 -- Xem phễu tuyển sinh & phân
tích
drop-off](media/image25.png "Hình B.10b. Wireframe màn hình UC-10 – Xem phễu tuyển sinh & phân tích drop-off"){width="3.3333333333333335in"
height="0.9166666666666666in"}

*Hình B.10b. Wireframe màn hình UC-10 -- Xem phễu tuyển sinh & phân tích
drop-off*

### 5. Acceptance Criteria

-   Given đủ dữ liệu, When tôi mở Funnel, Then hệ thống hiển thị đúng 5
    bước kèm % chuyển đổi và highlight bước drop-off cao nhất.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-10-01   Hiển thị đúng phễu    Dữ liệu đầy đủ 5    Hiển thị đúng số liệu
                                   bước                & %

  TC-10-02   Lọc theo chương trình program=CNTT        Phễu lọc đúng chương
                                                       trình

  TC-10-03   Thiếu dữ liệu 1 bước  Chưa ghi nhận Phỏng Hiển thị N/A cho bước
                                   vấn                 đó
  --------------------------------------------------------------------------

## B.11. UC-11 -- Xem dự báo doanh thu & nhập học

*Module: Executive Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Xem dự báo Enrollment/doanh thu 12 tháng kèm khoảng  |
|               | tin cậy, so sánh với target.                         |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Ban Giám đốc mở tab "Revenue Forecast".              |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Ban Giám đốc \| Hỗ trợ: Forecasting & Churn Engine   |
|               | (UC-15)                                              |
+---------------+------------------------------------------------------+
| Tiền điều     | Model Forecasting (UC-15) đã được huấn luyện trên dữ |
| kiện          | liệu lịch sử.                                        |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Ban Giám đốc có cơ sở dự báo để lập kế hoạch ngân    |
|               | sách/nguồn lực.                                      |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Mở tab Revenue Forecast.                         |
|               |                                                      |
|               | 2\. Gọi UC-15 để lấy dự báo Enrollment/Revenue theo  |
|               | tháng.                                               |
|               |                                                      |
|               | 3\. Vẽ biểu đồ đường kèm khoảng tin cậy (confidence  |
|               | interval).                                           |
|               |                                                      |
|               | 4\. So sánh dự báo với target đã đặt ra.             |
+---------------+------------------------------------------------------+
| Biến thể      | 4a. Dự báo lệch target \> 15% → hệ thống tự động tạo |
|               | insight cảnh báo (liên kết UC-12).                   |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. Model chưa đủ dữ liệu huấn luyện mới → hệ thống  |
|               | hiển thị dự báo dựa trên dữ liệu cũ nhất kèm ghi chú |
|               | thời điểm cập nhật.                                  |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | GET { horizonMonths (1--24) }                        |
+---------------+------------------------------------------------------+
| Output        | { forecast: \[{ month, enrollment, revenue,          |
|               | lowerBound, upperBound }\] }                         |
+---------------+------------------------------------------------------+
| Business Rule | Nếu độ tin cậy mô hình \<70%, gắn nhãn "dự báo sơ    |
|               | bộ" trên biểu đồ.                                    |
+---------------+------------------------------------------------------+
| Validation    | horizonMonths trong khoảng 1--24.                    |
+---------------+------------------------------------------------------+
| Database      | Đọc kết quả UC-15 (đã pre-compute, cache).           |
+---------------+------------------------------------------------------+
| API           | Method: GET                                          |
|               |                                                      |
|               | Endpoint: /api/v1/executive/forecast?months=12       |
|               |                                                      |
|               | Request mẫu: ---                                     |
|               |                                                      |
|               | Response mẫu: {                                      |
|               | \"forecast\":\[{\"month\":\"                         |
|               | 2026-08\",\"enrollment\":110,\"revenue\":\"4.2B\"}\] |
|               | }                                                    |
+---------------+------------------------------------------------------+
| Permission    | Role Executive/Admin.                                |
+---------------+------------------------------------------------------+
| Audit Log     | Log truy cập; log version model đã dùng để dự báo    |
|               | (traceability).                                      |
+---------------+------------------------------------------------------+
| Notification  | Tự động cảnh báo nếu forecast lệch target \>15%      |
|               | (liên kết UC-12).                                    |
+---------------+------------------------------------------------------+
| Performance   | Trả kết quả \<2s (dữ liệu pre-compute từ UC-15,      |
| Requirement   | không tính real-time).                               |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.11a. Biểu đồ hoạt động UC-11 -- Xem dự báo doanh thu & nhập
học](media/image26.png "Hình B.11a. Biểu đồ hoạt động UC-11 – Xem dự báo doanh thu & nhập học"){width="3.3333333333333335in"
height="5.322916666666667in"}

*Hình B.11a. Biểu đồ hoạt động UC-11 -- Xem dự báo doanh thu & nhập học*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ----------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**         **Loại**     **Mô tả**
  ---------- ---------------- -------------------- ------------ --------------------
  1          Mở tab Revenue                        Hành động    Mở tab Revenue
             Forecast.                             người dùng   Forecast.

  2                           Gọi UC-15 để lấy dự  Xử lý hệ     Gọi UC-15 để lấy dự
                              báo                  thống / AI   báo
                              Enrollment/Revenue                Enrollment/Revenue
                              theo tháng.                       theo tháng.

  3                           Vẽ biểu đồ đường kèm Xử lý hệ     Vẽ biểu đồ đường kèm
                              khoảng tin cậy       thống / AI   khoảng tin cậy
                              (confidence                       (confidence
                              interval).                        interval).

  4                           So sánh dự báo với   Xử lý hệ     So sánh dự báo với
                              target đã đặt ra.    thống / AI   target đã đặt ra.
  ----------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.11b. Wireframe màn hình UC-11 -- Xem dự báo doanh thu & nhập
học](media/image27.png "Hình B.11b. Wireframe màn hình UC-11 – Xem dự báo doanh thu & nhập học"){width="3.3333333333333335in"
height="0.8645833333333334in"}

*Hình B.11b. Wireframe màn hình UC-11 -- Xem dự báo doanh thu & nhập
học*

### 5. Acceptance Criteria

-   Given model đã chạy trong 24h, When tôi mở Revenue Forecast, Then
    biểu đồ hiển thị dự báo kèm khoảng tin cậy và so sánh target.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-11-01   Hiển thị dự báo bình  months=12           Biểu đồ đúng, có
             thường                                    confidence interval

  TC-11-02   Model dữ liệu cũ      Model chưa chạy lại Hiển thị cảnh báo dữ
             \>24h                                     liệu cũ

  TC-11-03   horizonMonths không   months=-1           Lỗi 400
             hợp lệ                                    
  --------------------------------------------------------------------------

## B.12. UC-12 -- Xem cảnh báo & khuyến nghị AI

*Module: Executive Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Ban Giám đốc xem các cảnh báo rủi ro (dropout, không |
|               | đạt chỉ tiêu) và khuyến nghị hành động do AI đề      |
|               | xuất.                                                |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Ban Giám đốc mở tab "AI Insights & Recommendations". |
| hoạt          |                                                      |
+---------------+------------------------------------------------------+
| Actor         | Ban Giám đốc \| Hỗ trợ: Forecasting & Churn Engine   |
|               | (UC-15)                                              |
+---------------+------------------------------------------------------+
| Tiền điều     | Churn Prediction model đã chạy trên dữ liệu          |
| kiện          | AcademicProfile mới nhất; Enrollment Forecasting đã  |
|               | cập nhật.                                            |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Ban Giám đốc có cơ sở ra quyết định phân bổ ngân     |
|               | sách/nguồn lực; insight đã xử lý được lưu vết.       |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Mở tab AI Insights & Recommendations.            |
|               |                                                      |
|               | 2\. Gọi UC-15 để lấy Risk Score theo chương          |
|               | trình/khu vực và độ lệch forecast so với target.     |
|               |                                                      |
|               | 3\. Hiển thị danh sách insight dạng thẻ.             |
|               |                                                      |
|               | 4\. Click vào 1 insight để xem giải thích (SHAP      |
|               | feature importance).                                 |
|               |                                                      |
|               | 5\. Đánh dấu insight đã xử lý hoặc giao việc cho     |
|               | phòng ban liên quan.                                 |
+---------------+------------------------------------------------------+
| Biến thể      | 3a. Ban Giám đốc lọc insight theo mức độ ưu tiên     |
|               | (Critical/Warning/Info).                             |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. Model chưa chạy trong 24h gần nhất → hệ thống    |
|               | hiển thị nhãn "Dữ liệu insight có thể chưa mới       |
|               | nhất".                                               |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | GET { priority? }                                    |
+---------------+------------------------------------------------------+
| Output        | \[ { insightId, title, priority, explanation, status |
|               | } \]                                                 |
+---------------+------------------------------------------------------+
| Business Rule | Insight Critical (Risk \>70% hoặc lệch forecast      |
|               | \>15%) không lặp lại cảnh báo trùng trong 7 ngày.    |
+---------------+------------------------------------------------------+
| Validation    | priority (nếu có filter) thuộc {Critical, Warning,   |
|               | Info}.                                               |
+---------------+------------------------------------------------------+
| Database      | Đọc kết quả UC-15; ghi trạng thái "Đã xử lý" vào     |
|               | bảng Insights.                                       |
+---------------+------------------------------------------------------+
| API           | Method: GET/PATCH                                    |
|               |                                                      |
|               | Endpoint: /api/v1/executive/insights ,               |
|               | /api/v1/executive/insights/{id}                      |
|               |                                                      |
|               | Request mẫu: { \"status\":\"resolved\" }             |
|               |                                                      |
|               | Response mẫu: \[ {                                   |
|               | \"insightId\":\"IN001\",\"title\":\"Dropout cao ở    |
|               | Khoa XD\",\"priority\":\"Critical\" } \]             |
+---------------+------------------------------------------------------+
| Permission    | Role Executive/Admin; chỉ Executive được đánh dấu    |
|               | "đã xử lý".                                          |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi ai xử lý insight nào, lúc nào (accountability).  |
+---------------+------------------------------------------------------+
| Notification  | Email/push ngay khi phát sinh insight Critical mới.  |
+---------------+------------------------------------------------------+
| Performance   | Danh sách tải \<2s; giải thích SHAP tải \<3s khi     |
| Requirement   | click chi tiết.                                      |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.12a. Biểu đồ hoạt động UC-12 -- Xem cảnh báo & khuyến nghị
AI](media/image28.png "Hình B.12a. Biểu đồ hoạt động UC-12 – Xem cảnh báo & khuyến nghị AI"){width="3.3333333333333335in"
height="5.895833333333333in"}

*Hình B.12a. Biểu đồ hoạt động UC-12 -- Xem cảnh báo & khuyến nghị AI*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  --------------------------------------------------------------------------------
  **Bước**   **Người dùng**     **Hệ thống**     **Loại**     **Mô tả**
  ---------- ------------------ ---------------- ------------ --------------------
  1          Mở tab AI Insights                  Hành động    Mở tab AI Insights &
             & Recommendations.                  người dùng   Recommendations.

  2                             Gọi UC-15 để lấy Xử lý hệ     Gọi UC-15 để lấy
                                Risk Score theo  thống / AI   Risk Score theo
                                chương trình/khu              chương trình/khu vực
                                vực và độ lệch                và độ lệch forecast
                                forecast so với               so với target.
                                target.                       

  3                             Hiển thị danh    Xử lý hệ     Hiển thị danh sách
                                sách insight     thống / AI   insight dạng thẻ.
                                dạng thẻ.                     

  4          Click vào 1                         Hành động    Click vào 1 insight
             insight để xem                      người dùng   để xem giải thích
             giải thích (SHAP                                 (SHAP feature
             feature                                          importance).
             importance).                                     

  5          Đánh dấu insight                    Hành động    Đánh dấu insight đã
             đã xử lý hoặc giao                  người dùng   xử lý hoặc giao việc
             việc cho phòng ban                               cho phòng ban liên
             liên quan.                                       quan.
  --------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.12b. Wireframe màn hình UC-12 -- Xem cảnh báo & khuyến nghị
AI](media/image29.png "Hình B.12b. Wireframe màn hình UC-12 – Xem cảnh báo & khuyến nghị AI"){width="3.3333333333333335in"
height="1.5in"}

*Hình B.12b. Wireframe màn hình UC-12 -- Xem cảnh báo & khuyến nghị AI*

### 5. Acceptance Criteria

-   Given Risk Score \>70%, When Executive Dashboard tải insight, Then
    insight gắn nhãn Critical và hiển thị đầu danh sách.

-   Given tôi đánh dấu 1 insight đã xử lý, When tôi lưu, Then hệ thống
    không lặp lại cảnh báo trùng trong 7 ngày tới.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-12-01   Hiển thị insight đúng Risk Score đa dạng  Sắp xếp Critical
             ưu tiên                                   trước

  TC-12-02   Đánh dấu đã xử lý     PATCH               Không lặp cảnh báo 7
                                   status=resolved     ngày

  TC-12-03   Model \>24h chưa chạy Model cũ            Nhãn cảnh báo dữ liệu
                                                       cũ
  --------------------------------------------------------------------------

## B.13. UC-13 -- Drill-down chi tiết & Export báo cáo

*Module: Executive Dashboard*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Cho phép Ban Giám đốc click sâu vào từng KPI/widget  |
|               | để xem chi tiết và xuất báo cáo PDF/Excel.           |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Ban Giám đốc click vào 1 KPI Card hoặc chọn          |
| hoạt          | "Export".                                            |
+---------------+------------------------------------------------------+
| Actor         | Ban Giám đốc                                         |
+---------------+------------------------------------------------------+
| Tiền điều     | Đang xem một trong các Dashboard (UC-09/10/11/12).   |
| kiện          |                                                      |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Ban Giám đốc xem được dữ liệu chi tiết hoặc nhận     |
|               | file báo cáo.                                        |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Click vào 1 KPI (VD: Conversion Rate).           |
|               |                                                      |
|               | 2\. Hiển thị bảng chi tiết (breakdown theo chương    |
|               | trình/khu vực/thời gian).                            |
|               |                                                      |
|               | 3\. Chọn "Export" và định dạng (PDF/Excel).          |
|               |                                                      |
|               | 4\. Tạo file báo cáo và cho phép tải xuống.          |
+---------------+------------------------------------------------------+
| Biến thể      | 2a. Ban Giám đốc áp thêm filter trước khi export.    |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 4a. Lỗi tạo file (dữ liệu quá lớn) → hệ thống đề     |
|               | xuất thu hẹp phạm vi hoặc xuất theo lô (batch).      |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | { kpiId, filters, format: PDF\|Excel }               |
+---------------+------------------------------------------------------+
| Output        | { fileUrl } hoặc dữ liệu breakdown chi tiết          |
+---------------+------------------------------------------------------+
| Business Rule | Giới hạn export tối đa 12 tháng dữ liệu/lần.         |
+---------------+------------------------------------------------------+
| Validation    | format thuộc {PDF, Excel}.                           |
|               |                                                      |
|               | filters hợp lệ theo danh mục.                        |
+---------------+------------------------------------------------------+
| Database      | Đọc dữ liệu tổng hợp tương ứng KPI được chọn.        |
+---------------+------------------------------------------------------+
| API           | Method: POST                                         |
|               |                                                      |
|               | Endpoint: /api/v1/executive/export                   |
|               |                                                      |
|               | Request mẫu: { \"kpiId\":\"conversionRate\",         |
|               | \"format\":\"PDF\", \"range\":\"YTD\" }              |
|               |                                                      |
|               | Response mẫu: {                                      |
|               | \"fileUrl\":\"/downloads/report_20260710.pdf\" }     |
+---------------+------------------------------------------------------+
| Permission    | Role Executive/Admin.                                |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi log export (ai, khi nào, phạm vi dữ liệu) --- dữ |
|               | liệu tài chính nhạy cảm.                             |
+---------------+------------------------------------------------------+
| Notification  | Gửi link tải qua email nếu file lớn (xử lý bất đồng  |
|               | bộ \>10s).                                           |
+---------------+------------------------------------------------------+
| Performance   | Export \<10s cho phạm vi ≤12 tháng; xử lý nền        |
| Requirement   | (background job) nếu lớn hơn.                        |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.13a. Biểu đồ hoạt động UC-13 -- Drill-down chi tiết & Export
báo
cáo](media/image30.png "Hình B.13a. Biểu đồ hoạt động UC-13 – Drill-down chi tiết & Export báo cáo"){width="3.3333333333333335in"
height="5.489583333333333in"}

*Hình B.13a. Biểu đồ hoạt động UC-13 -- Drill-down chi tiết & Export báo
cáo*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**     **Loại**     **Mô tả**
  ---------- ---------------- ---------------- ------------ --------------------
  1          Click vào 1 KPI                   Hành động    Click vào 1 KPI (VD:
             (VD: Conversion                   người dùng   Conversion Rate).
             Rate).                                         

  2                           Hiển thị bảng    Xử lý hệ     Hiển thị bảng chi
                              chi tiết         thống / AI   tiết (breakdown theo
                              (breakdown theo               chương trình/khu
                              chương trình/khu              vực/thời gian).
                              vực/thời gian).               

  3          Chọn "Export" và                  Hành động    Chọn "Export" và
             định dạng                         người dùng   định dạng
             (PDF/Excel).                                   (PDF/Excel).

  4                           Tạo file báo cáo Xử lý hệ     Tạo file báo cáo và
                              và cho phép tải  thống / AI   cho phép tải xuống.
                              xuống.                        
  ------------------------------------------------------------------------------

### 4. UI Wireframe

![Hình B.13b. Wireframe màn hình UC-13 -- Drill-down chi tiết & Export
báo
cáo](media/image31.png "Hình B.13b. Wireframe màn hình UC-13 – Drill-down chi tiết & Export báo cáo"){width="3.3333333333333335in"
height="0.90625in"}

*Hình B.13b. Wireframe màn hình UC-13 -- Drill-down chi tiết & Export
báo cáo*

### 5. Acceptance Criteria

-   Given tôi chọn phạm vi hợp lệ, When tôi export PDF, Then hệ thống
    trả file trong \<10s.

-   Given phạm vi quá lớn, When tôi export, Then hệ thống chuyển xử lý
    nền và gửi email khi xong.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-13-01   Export PDF thành công range=YTD           Nhận file PDF \<10s

  TC-13-02   Export Excel thành    format=Excel        Nhận file Excel đúng
             công                                      dữ liệu

  TC-13-03   Phạm vi quá lớn       range=36 tháng      Chuyển xử lý nền, gửi
                                                       email
  --------------------------------------------------------------------------

## B.14. UC-14 -- Chấm điểm & phân loại Lead (Lead Scoring & Classification)

*Module: AI Platform (dùng chung)*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Mô hình AI (XGBoost/Logistic Regression + LLM        |
|               | feature engineering) chấm điểm 0--100 và phân hạng   |
|               | Hot/Warm/Cold cho từng Lead dựa trên hồ sơ và lịch   |
|               | sử tương tác.                                        |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Lead mới được tạo (UC-01), có Interaction mới        |
| hoạt          | (UC-07), hoặc chạy batch định kỳ.                    |
+---------------+------------------------------------------------------+
| Actor         | Lead Scoring Engine \| Hỗ trợ: Được include bởi      |
|               | UC-05, UC-06                                         |
+---------------+------------------------------------------------------+
| Tiền điều     | Model Lead Scoring đã được huấn luyện và triển khai  |
| kiện          | (deployed).                                          |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Score và hạng (Hot/Warm/Cold) của Lead được cập      |
|               | nhật, sẵn sàng cho UC-05/UC-06 sử dụng.              |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Nhận sự kiện kích hoạt (Lead mới/Interaction     |
|               | mới/lịch batch).                                     |
|               |                                                      |
|               | 2\. Trích xuất đặc trưng (feature engineering) từ    |
|               | Leads + Interactions.                                |
|               |                                                      |
|               | 3\. Model dự đoán Enrollment Probability (0--100).   |
|               |                                                      |
|               | 4\. Phân hạng: Hot (≥70), Warm (40--69), Cold        |
|               | (\<40).                                              |
|               |                                                      |
|               | 5\. Lưu Score/hạng và gắn timestamp cập nhật.        |
+---------------+------------------------------------------------------+
| Biến thể      | 3a. Model phát hiện thiếu dữ liệu quan trọng → dùng  |
|               | giá trị mặc định/imputation trước khi dự đoán.       |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 3b. Model service lỗi/không phản hồi → hệ thống giữ  |
|               | Score cũ, ghi log lỗi để đội kỹ thuật xử lý.         |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | LeadEvent { leadId, trigger:                         |
|               | \"new\"\|\"interaction\"\|\"batch\" }                |
+---------------+------------------------------------------------------+
| Output        | { leadId, score(0--100), rank: Hot\|Warm\|Cold,      |
|               | updatedAt }                                          |
+---------------+------------------------------------------------------+
| Business Rule | Hot ≥70, Warm 40--69, Cold \<40.                     |
|               |                                                      |
|               | Thiếu \>30% field quan trọng → hạ 1 bậc độ tin cậy   |
|               | (confidence).                                        |
+---------------+------------------------------------------------------+
| Validation    | leadId phải tồn tại.                                 |
|               |                                                      |
|               | trigger thuộc danh mục hợp lệ.                       |
+---------------+------------------------------------------------------+
| Database      | Đọc Leads, Interactions.                             |
|               |                                                      |
|               | Ghi bảng LeadScores (leadId, score, rank,            |
|               | modelVersion, updatedAt).                            |
+---------------+------------------------------------------------------+
| API           | Method: POST                                         |
|               |                                                      |
|               | Endpoint: /internal/v1/scoring/run (internal         |
|               | service-to-service)                                  |
|               |                                                      |
|               | Request mẫu: { \"leadId\":\"L20260001\",             |
|               | \"trigger\":\"new\" }                                |
|               |                                                      |
|               | Response mẫu: { \"leadId\":\"L20260001\",            |
|               | \"score\":78, \"rank\":\"Hot\" }                     |
+---------------+------------------------------------------------------+
| Permission    | Internal service only -- xác thực bằng service API   |
|               | key / mTLS giữa các microservice, không public.      |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi model version, input feature snapshot, output    |
|               | --- phục vụ truy vết và retraining.                  |
+---------------+------------------------------------------------------+
| Notification  | Nếu đổi hạng (VD Cold→Hot): thông báo ưu tiên cho    |
|               | advisor qua UC-05.                                   |
+---------------+------------------------------------------------------+
| Performance   | \<500ms/Lead cho trigger real-time.                  |
| Requirement   |                                                      |
|               | Batch job xử lý toàn bộ Lead \<30 phút mỗi đêm.      |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.14a. Biểu đồ hoạt động UC-14 -- Chấm điểm & phân loại Lead
(Lead Scoring &
Classification)](media/image32.png "Hình B.14a. Biểu đồ hoạt động UC-14 – Chấm điểm & phân loại Lead (Lead Scoring & Classification)"){width="3.3333333333333335in"
height="5.770833333333333in"}

*Hình B.14a. Biểu đồ hoạt động UC-14 -- Chấm điểm & phân loại Lead (Lead
Scoring & Classification)*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  -------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**      **Loại**     **Mô tả**
  ---------- ---------------- ----------------- ------------ --------------------
  1                           Nhận sự kiện kích Xử lý hệ     Nhận sự kiện kích
                              hoạt (Lead        thống / AI   hoạt (Lead
                              mới/Interaction                mới/Interaction
                              mới/lịch batch).               mới/lịch batch).

  2                           Trích xuất đặc    Xử lý hệ     Trích xuất đặc trưng
                              trưng (feature    thống / AI   (feature
                              engineering) từ                engineering) từ
                              Leads +                        Leads +
                              Interactions.                  Interactions.

  3                           Model dự đoán     Xử lý hệ     Model dự đoán
                              Enrollment        thống / AI   Enrollment
                              Probability                    Probability
                              (0--100).                      (0--100).

  4                           Phân hạng: Hot    Xử lý hệ     Phân hạng: Hot
                              (≥70), Warm       thống / AI   (≥70), Warm
                              (40--69), Cold                 (40--69), Cold
                              (\<40).                        (\<40).

  5                           Lưu Score/hạng và Xử lý hệ     Lưu Score/hạng và
                              gắn timestamp cập thống / AI   gắn timestamp cập
                              nhật.                          nhật.
  -------------------------------------------------------------------------------

### 4. UI Wireframe

*Không áp dụng --- đây là Use Case xử lý nền/AI service (backend), không
có giao diện người dùng.*

### 5. Acceptance Criteria

-   Given Lead có đủ dữ liệu, When model chạy, Then Score trả về 0--100
    và rank đúng ngưỡng.

-   Given model service lỗi, When gọi scoring, Then hệ thống giữ Score
    cũ và ghi log lỗi thay vì trả lỗi cho người dùng cuối.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-14-01   Lead đủ dữ liệu       Đầy đủ field        Score hợp lý, rank
                                                       đúng

  TC-14-02   Lead thiếu dữ liệu    \>30% field trống   Vẫn trả Score,
                                                       confidence thấp hơn

  TC-14-03   Model service timeout Service không phản  Fallback Score cũ,
                                   hồi                 ghi log lỗi
  --------------------------------------------------------------------------

## B.15. UC-15 -- Dự đoán rủi ro bỏ học / Dự báo Enrollment (Churn & Forecasting)

*Module: AI Platform (dùng chung)*

### 1. Bảng đặc tả chức năng (Mục đích / Actor / Trigger / Sequence / Error)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Mô tả         | Hai mô hình AI chạy song song: Random Forest + SHAP  |
|               | dự đoán nguy cơ bỏ học; Prophet/LSTM dự báo          |
|               | Enrollment/doanh thu theo thời gian.                 |
+---------------+------------------------------------------------------+
| Sự kiện kích  | Chạy batch định kỳ (hằng đêm) hoặc khi Ban Giám đốc  |
| hoạt          | mở Dashboard cần dữ liệu mới.                        |
+---------------+------------------------------------------------------+
| Actor         | Forecasting & Churn Engine \| Hỗ trợ: Được include   |
|               | bởi UC-11, UC-12                                     |
+---------------+------------------------------------------------------+
| Tiền điều     | Có đủ dữ liệu lịch sử AcademicProfile (Churn) và     |
| kiện          | Leads/Offers (Forecasting).                          |
+---------------+------------------------------------------------------+
| Hậu điều kiện | Risk Score theo sinh viên/chương trình và Forecast   |
|               | theo tháng được cập nhật, sẵn sàng cho UC-11/UC-12.  |
+---------------+------------------------------------------------------+
| Luồng chính   | 1\. Thu thập dữ liệu mới nhất từ AcademicProfile,    |
|               | Leads, Offers.                                       |
|               |                                                      |
|               | 2\. Model Churn tính Risk Score cho từng sinh viên,  |
|               | kèm giải thích SHAP.                                 |
|               |                                                      |
|               | 3\. Model Forecasting dự báo Enrollment/Revenue 12   |
|               | tháng tới kèm khoảng tin cậy.                        |
|               |                                                      |
|               | 4\. Tổng hợp kết quả theo chương trình/khu vực.      |
|               |                                                      |
|               | 5\. Lưu kết quả và đánh dấu thời điểm cập nhật.      |
+---------------+------------------------------------------------------+
| Biến thể      | 4a. Phát hiện Risk Score bất thường tăng đột biến ở  |
|               | 1 chương trình → hệ thống gắn cờ ưu tiên cảnh báo.   |
+---------------+------------------------------------------------------+
| Ngoại lệ      | 2a. Dữ liệu chuyên cần/điểm số thiếu nhiều → model   |
|               | giảm độ tin cậy (confidence) và ghi chú trong        |
|               | output.                                              |
+---------------+------------------------------------------------------+

### 2. Bảng đặc tả kỹ thuật (Input / Output / Business Rule / Validation / Database / API / Permission / Audit Log / Notification / Performance)

+---------------+------------------------------------------------------+
| **TIÊU ĐỀ**   | **NỘI DUNG**                                         |
+===============+======================================================+
| Input         | ScheduledJob { jobType: \"churn\"\|\"forecast\",     |
|               | asOfDate }                                           |
+---------------+------------------------------------------------------+
| Output        | churn: \[{studentId, riskScore, topFactors}\];       |
|               | forecast: \[{month, enrollment, revenue, ci}\]       |
+---------------+------------------------------------------------------+
| Business Rule | Risk Score tăng đột biến \>20 điểm so với kỳ trước → |
|               | tự động gắn cờ ưu tiên.                              |
|               |                                                      |
|               | Forecast dưới 70% confidence phải gắn nhãn "sơ bộ".  |
+---------------+------------------------------------------------------+
| Validation    | asOfDate hợp lệ, không ở tương lai.                  |
+---------------+------------------------------------------------------+
| Database      | Đọc AcademicProfile (cho Churn), Leads/Offers (cho   |
|               | Forecasting).                                        |
|               |                                                      |
|               | Ghi bảng ChurnScores, ForecastResults.               |
+---------------+------------------------------------------------------+
| API           | Method: POST                                         |
|               |                                                      |
|               | Endpoint: /internal/v1/ai/churn-forecast/run         |
|               |                                                      |
|               | Request mẫu: { \"jobType\":\"churn\",                |
|               | \"asOfDate\":\"2026-07-10\" }                        |
|               |                                                      |
|               | Response mẫu: { \"status\":\"completed\",            |
|               | \"recordsProcessed\":150 }                           |
+---------------+------------------------------------------------------+
| Permission    | Internal service only -- chạy theo lịch (cron) hoặc  |
|               | trigger nội bộ từ Executive Dashboard.               |
+---------------+------------------------------------------------------+
| Audit Log     | Ghi model version, thời gian chạy, số bản ghi xử lý, |
|               | lỗi (nếu có).                                        |
+---------------+------------------------------------------------------+
| Notification  | Kết quả tổng hợp cấp cho UC-11/UC-12 sử dụng.        |
|               |                                                      |
|               | Cảnh báo nội bộ cho đội Data/AI nếu job lỗi.         |
+---------------+------------------------------------------------------+
| Performance   | Batch job hoàn tất \<30 phút mỗi đêm, đảm bảo dữ     |
| Requirement   | liệu sẵn sàng trước 7:00 sáng.                       |
+---------------+------------------------------------------------------+

### 3. Biểu đồ hoạt động (Activity Diagram)

![Hình B.15a. Biểu đồ hoạt động UC-15 -- Dự đoán rủi ro bỏ học / Dự báo
Enrollment (Churn &
Forecasting)](media/image33.png "Hình B.15a. Biểu đồ hoạt động UC-15 – Dự đoán rủi ro bỏ học / Dự báo Enrollment (Churn & Forecasting)"){width="3.3333333333333335in"
height="5.802083333333333in"}

*Hình B.15a. Biểu đồ hoạt động UC-15 -- Dự đoán rủi ro bỏ học / Dự báo
Enrollment (Churn & Forecasting)*

### Bảng mô tả hoạt động (Sequence chi tiết dạng swimlane)

  ----------------------------------------------------------------------------------
  **Bước**   **Người dùng**   **Hệ thống**         **Loại**     **Mô tả**
  ---------- ---------------- -------------------- ------------ --------------------
  1                           Thu thập dữ liệu mới Xử lý hệ     Thu thập dữ liệu mới
                              nhất từ              thống / AI   nhất từ
                              AcademicProfile,                  AcademicProfile,
                              Leads, Offers.                    Leads, Offers.

  2                           Model Churn tính     Xử lý hệ     Model Churn tính
                              Risk Score cho từng  thống / AI   Risk Score cho từng
                              sinh viên, kèm giải               sinh viên, kèm giải
                              thích SHAP.                       thích SHAP.

  3                           Model Forecasting dự Xử lý hệ     Model Forecasting dự
                              báo                  thống / AI   báo
                              Enrollment/Revenue                Enrollment/Revenue
                              12 tháng tới kèm                  12 tháng tới kèm
                              khoảng tin cậy.                   khoảng tin cậy.

  4                           Tổng hợp kết quả     Xử lý hệ     Tổng hợp kết quả
                              theo chương          thống / AI   theo chương
                              trình/khu vực.                    trình/khu vực.

  5                           Lưu kết quả và đánh  Xử lý hệ     Lưu kết quả và đánh
                              dấu thời điểm cập    thống / AI   dấu thời điểm cập
                              nhật.                             nhật.
  ----------------------------------------------------------------------------------

### 4. UI Wireframe

*Không áp dụng --- đây là Use Case xử lý nền/AI service (backend), không
có giao diện người dùng.*

### 5. Acceptance Criteria

-   Given dữ liệu đầu vào đầy đủ, When job chạy theo lịch, Then Risk
    Score/Forecast cập nhật trước 7:00 sáng hôm sau.

-   Given job lỗi, When phát hiện, Then hệ thống giữ kết quả kỳ trước và
    cảnh báo đội kỹ thuật.

### 6. Test Scenario

  --------------------------------------------------------------------------
  **Test     **Mô tả**             **Input**           **Kết quả mong đợi**
  ID**                                                 
  ---------- --------------------- ------------------- ---------------------
  TC-15-01   Job chạy thành công   Dữ liệu đầy đủ      Cập nhật đúng kết
             đúng lịch                                 quả, đúng giờ

  TC-15-02   Dữ liệu thiếu nhiều   AcademicProfile     Giảm confidence,
                                   thiếu field         không crash

  TC-15-03   Job lỗi giữa chừng    Exception khi chạy  Giữ kết quả cũ, cảnh
                                                       báo đội kỹ thuật
  --------------------------------------------------------------------------

*Hết Phụ lục. Phụ lục A & B áp dụng đúng khung mẫu (template) do bạn
cung cấp, tích hợp cùng phần lý thuyết/SOP/User Story Backlog ở các Mục
1--12 phía trên để tạo thành một tài liệu Use Case & User Story hoàn
chỉnh cho dự án.*
